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
            CreateMap<User, UserModify>().ReverseMap();


            CreateMap<AnnouncementDto, Announcement>();
            CreateMap<Announcement, AnnouncementDto>();
            CreateMap<AnnouncementCreate, Announcement>();
            CreateMap<AnnouncementModify, Announcement>().ReverseMap();

            CreateMap<SubjectDto, Subject>();
            CreateMap<Subject, SubjectDto>();

            CreateMap<TagDto, Tag>();
            CreateMap<Tag, TagDto>();

            CreateMap<Tutor, TutorDto>();
            CreateMap<TutorDto, Tutor>()
                .ForMember(dest => dest.Reviews, x => x.MapFrom(src => src.Reviews));

            CreateMap<Achievement, AchievementDto>();
            CreateMap<AchievementDto, AchievementDto>();

            CreateMap<Review, ReviewDto>()
                .ForMember(dest => dest.Author, x => x.MapFrom(src => src.Client.FirstName + src.Client.LastName));
            CreateMap<ReviewCreateDto, Review>();

        }
    }
}
