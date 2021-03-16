
using ComoSecondModel;
using ComoSecondViewModel;
using System;
using System.Collections.Generic;
using System.Text;

namespace ComoSecondBusiness.Interface
{
   public interface IProjetService
    {
        IEnumerable<ProjetViewModel> GetAll();
        void InsertProjetViewModel(ProjetViewModel projet);
    }
}
