using System;
using System.Linq;
using System.Security.Claims;
using System.Web;
using System.Web.Http;

namespace AspNetApp.Controllers
{
    public class UserControllerBase : ApiController
    {
        protected virtual new ClaimsPrincipal User
        {
            get { return HttpContext.Current.User as ClaimsPrincipal; }
        }
    }
}
