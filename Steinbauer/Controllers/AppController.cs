using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Steinbauer.Data;

namespace Steinbauer.Controllers
{
    public class AppController : Controller
    {
        private readonly IVehicleRepository _repository;

        public AppController(IVehicleRepository repository)
        {
            _repository = repository;
        }

        public IActionResult Vehicles()
        {
            return View();
        }

        public IActionResult Mods()
        {
            return View();
        }

        [Authorize]
        public IActionResult Shop()
        {
            var results = _repository.GetAllVehicles(true);
            return View(results);
        }

        public IActionResult Add()
        {
            return View();
        }
    }
}