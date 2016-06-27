using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Lanai.Controllers
{
    public class Hero{
        public int id { get; set; }
        public string name { get; set; }
        
    }
    [Route("api/[controller]")]
    public class ValuesController : Controller
    {
        
        // GET: api/values
        [HttpGet]
        public ActionResult Get()
        {
            var result = new List<Hero>();
            result.Add(new Hero { id = 1, name = "nhan" });
            result.Add(new Hero { id = 2, name = "Narco" });
            return Json( new { data = result } );
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
