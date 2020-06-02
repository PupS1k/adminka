using adminka.Model;
using adminka.ModelDTO;
using AutoMapper;
using System.Linq;

namespace adminka.Mapping
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<User, UserView>().ForMember(dto => dto.Roles, opt => opt.MapFrom(x => x.Roles.Select(roles => roles.Role).ToList()));
            CreateMap<EditUserView, User>().ForMember(dto => dto.Roles, opt => opt.MapFrom(x => x.Roles.Select(role => new RoleUser { 
                RoleId = role.RoleId,
                UserId = x.Id
            }).ToList()));
            CreateMap<Role, RoleView>().ReverseMap();
            CreateMap<RoleUser, RoleUserView>().ReverseMap();
        }
    }
}
