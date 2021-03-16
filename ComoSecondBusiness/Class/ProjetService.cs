
using AutoMapper;
using ComoSecondBusiness.Interface;
using ComoSecondBusiness.Repository;
using ComoSecondModel;
using ComoSecondViewModel;
using System.Collections.Generic;
using System.Linq;

namespace ComoSecondBusiness.Class
{
    public class ProjetService :  IProjetService
    {
        private readonly IGenericRepository<Projet> _projetRepo;
        private readonly IMapper _mapper;
        public ProjetService(IGenericRepository<Projet> projetRepo,
            IMapper mapper)
        {
            _projetRepo = projetRepo;
            _mapper = mapper;
        }



        public IEnumerable<ProjetViewModel> GetAll()
        {
            return _projetRepo.GetAll().Select(x =>
            {
                return new ProjetViewModel
                {
                    Id = x.Id,
                    Title = x.Title,
                    Descriptif = x.Descriptif,
                    Colaborateur = x.Colaborateur,
                    Image = Helper.ConvertStringByteHelper.ByteToBase64(x.Image),
                    Document = Helper.ConvertStringByteHelper.ByteToBase64(x.Document)
                };
            });

        }

        public void InsertProjetViewModel(ProjetViewModel projet)
        {
            var projetAinserer = new Projet
            {
                Colaborateur = projet.Colaborateur,
                Descriptif = projet.Descriptif,
                Document = Helper.ConvertStringByteHelper.Base64ToByte(projet.Document),
                Image = Helper.ConvertStringByteHelper.Base64ToByte(projet.Image),
            };
            _projetRepo.Insert(projetAinserer);
            _projetRepo.Save();
        }
    }
}
