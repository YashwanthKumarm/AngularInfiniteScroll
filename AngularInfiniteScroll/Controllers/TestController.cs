using AngularInfiniteScroll.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AngularInfiniteScroll.Controllers
{
    public class TestController : Controller
    {
        // GET: Test
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult GetSampleData(int page)
        {
            List<student1> list = new List<student1>();
            using (FirstDatabaseEntities db = new FirstDatabaseEntities())
            {
                int totalPage = 0;
                int totalRecord = 0;
                int pageSize = 20;
                var TableList = db.student1.ToList();
                totalRecord = TableList.Count;
                totalPage = (totalRecord / pageSize) + ((totalRecord % pageSize) > 0 ? 1 : 0);
                list = TableList.Skip((page - 1) * pageSize).Take(pageSize).ToList();
                return new JsonResult { Data = new {List =list,currentpage=page,totalPage=totalPage  }, JsonRequestBehavior = JsonRequestBehavior.AllowGet };
            }
        }
    }
}