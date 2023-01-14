using AutoMapper;
using Koreprtycje_.DTO;
using Koreprtycje_.Models;
using Model.DTO;
using Model.Models;
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
            CreateMap<UserRegisterDto, User>().ReverseMap();
            CreateMap<UserRegisterDto, Administrator>().ReverseMap();

            CreateMap<User, UserLoginDto>();
            CreateMap<User, UserDto>().ReverseMap();
            CreateMap<User, UserModify>().ReverseMap();
            CreateMap<OtherUserDto, User>().ReverseMap();


            CreateMap<AnnouncementDto, Announcement>().ReverseMap();

            CreateMap<AnnouncementCreate, Announcement>();
            CreateMap<AnnouncementModify, Announcement>().ReverseMap();

            CreateMap<SubjectDto, Subject>().ReverseMap();

            CreateMap<Review, ReviewDto>().ReverseMap();
            CreateMap<ReviewCreateDto, Review>();

        }
    }
}
