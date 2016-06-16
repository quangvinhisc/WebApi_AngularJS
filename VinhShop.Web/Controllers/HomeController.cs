using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using VinhShop.Data.Infrastructure;
using VinhShop.Data.Repositories;
using VinhShop.Model.Models;

namespace VinhShop.Web.Controllers
{
    public class HomeController : Controller
    {
        
        public ActionResult Index()
        {
            IDbFactory dbFactory;
            IPostCategoryRepository objRepository;
            IUnitOfWork unitOfWork;
            dbFactory = new DbFactory();
            objRepository = new PostCategoryRepository(dbFactory);
            unitOfWork = new UnitOfWork(dbFactory);
            PostCategory category = new PostCategory();
            category.Name = "Test category";
            category.Alias = "Test-category";
            category.Status = true;

            var list = objRepository.GetAll().ToList();

            var result = objRepository.Add(category);
            unitOfWork.Commit();
            return View();
        }

        public ActionResult About()
        {

            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}