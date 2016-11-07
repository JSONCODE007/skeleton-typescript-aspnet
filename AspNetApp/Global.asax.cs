using System;
using System.Configuration;
using System.Linq;
using System.Security.Claims;
using System.Web;
using System.Web.Http;

namespace AspNetApp
{
    public class WebApiApplication : HttpApplication
    {
        protected void Application_Start()
        {
            AutoMapperConfig.Configure();
            UnityConfig.RegisterComponents();
            GlobalConfiguration.Configure(WebApiConfig.Register);
        }
        protected void Application_PostAuthorizeRequest()
        {
            var claimsPrincipal = HttpContext.Current.User as ClaimsPrincipal;
            if (claimsPrincipal != null)
            {
                if (HttpContext.Current.Request.Cookies[".UIROLES"] == null)
                {
                    var uiroles = Server.HtmlEncode(string.Join("|", claimsPrincipal.Claims
                                                                                    .Where(claim => claim.Value.StartsWith("UIRole", StringComparison.OrdinalIgnoreCase))
                                                                                    .Select(claim => claim.Value.ToLowerInvariant().Replace("uirole-", string.Empty))
                                                                ));
                    var uiRolesCookie = new HttpCookie(".UIROLES", uiroles);
                    HttpContext.Current.Response.Cookies.Add(uiRolesCookie);
                    HttpContext.Current.Response.Redirect(ConfigurationManager.AppSettings["Authentication.ReturnUrl"]);
                }
            }
        }
    }
}
