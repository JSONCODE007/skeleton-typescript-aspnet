using System;
using System.Threading.Tasks;
using System.Web.Http;

namespace AspNetApp.Controllers
{
    [RoutePrefix("api/tests")]

    public class TestsController : ApiController
    {
        [Route("")]
        public async Task<IHttpActionResult> Get()
        {
            return Ok(new Test { TestString = "testing 123" });
        }
    }
}
