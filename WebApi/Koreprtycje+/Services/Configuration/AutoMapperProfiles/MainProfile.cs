using AutoMapper;
using Koreprtycje_.DTO;
using Koreprtycje_.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.Configuration.AutoMapperProfiles
{
    public class MainProfile : Profile
    {
        public MainProfile()
        {
            CreateMap<Announcement, AnnouncementDto>();
        }
    }
}
