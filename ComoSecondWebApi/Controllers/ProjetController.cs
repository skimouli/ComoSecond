using ComoSecondBusiness.Interface;
using ComoSecondViewModel;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ComoSecondWebApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProjetController : Controller
    {
        private readonly IProjetService _projetService;
        public ProjetController(IProjetService projetService)
        {
            _projetService = projetService;
        }
        [HttpGet]
        public IEnumerable<ProjetViewModel> Get()
        {
            return _projetService.GetAll();
        }

        [HttpPost]
        public void Add(ProjetViewModel projet)
        {
            _projetService.InsertProjetViewModel(projet);
        }
    }
}
