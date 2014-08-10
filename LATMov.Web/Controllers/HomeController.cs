using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using LATMov.Core;
using LATMov.Domain;

namespace LATMov.Controllers {
    public class HomeController: Controller {
        private UnitOfWork unitOfWork = new UnitOfWork();
        public ActionResult Index() {

            return View();
        }

        public ActionResult About() {
            ViewBag.Message = "Your application description page.";

            return View();
        }
        
        public ActionResult Contact() {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        [ChildActionOnly]
        public ActionResult DisplayCarrousel() { 
          
            Movie movie = unitOfWork.Movie.Find(1);
            ViewBag.name = movie.name;
            ViewBag.releaseDate = movie.releaseDate.ToString("dd/MM/yyyy");
            ViewBag.photo =  movie.photos.First().urlPhoto;
            return PartialView("_Carrousel");
        }
    }
}