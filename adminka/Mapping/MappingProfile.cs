using adminka.Model;
using AutoMapper;

namespace adminka.Mapping
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<User, UserView>();
            CreateMap<Role, RoleView>();
        }
    }
}
