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
            CreateMap<User, UserLoginDto>();
            CreateMap<User, UserDto>();
            CreateMap<UserDto, User>();
            CreateMap<UserRegisterDto, UserLoginDto>();

            CreateMap<AnnouncementDto, Announcement>();
            CreateMap<Announcement, AnnouncementDto>();
            CreateMap<AnnouncementCreate, Announcement>();

            CreateMap<SubjectDto, Subject>();
            CreateMap<Subject, SubjectDto>();

            CreateMap<TagDto, Tag>();
            CreateMap<Tag, TagDto>();

            CreateMap<Tutor, TutorDto>();
            CreateMap<TutorDto, Tutor>();

            CreateMap<Achievement, AchievementDto>();
            CreateMap<AchievementDto, AchievementDto>();
        }
    }
}
