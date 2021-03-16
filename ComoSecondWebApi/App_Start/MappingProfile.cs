using System;

using AutoMapper;
using ComoSecondModel;
using ComoSecondViewModel;

namespace ComoFirst.WebApi.App_Start
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Projet, ProjetViewModel>().ReverseMap();
        }
    }
}
