
using API.Entities;
using API.Extensions;
using AutoMapper;

namespace API.Helper
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<AppUser, MemberDto>()
            .ForMember(dist=>dist.PhotoUrl, 
            opt=>opt.MapFrom(src=>src.Photos.FirstOrDefault(x=>x.IsMain).URL))
            .ForMember(dist=>dist.Age, opt=> opt.MapFrom(src => src.DateOfBirth.CalculateAge()));
            CreateMap<Photo, PhotoDto>();
        }
    }
}