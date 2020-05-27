using adminka.Model;
using adminka.ModelDTO;
using AutoMapper;

namespace adminka.Mapping
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<User, UserView>();
            CreateMap<UserView, User>();
            CreateMap<Role, RoleView>();
            CreateMap<RoleView, Role>();
            CreateMap<RoleUser, RoleUserView>();
            CreateMap<RoleUserView, RoleUser>();
        }
    }
}
