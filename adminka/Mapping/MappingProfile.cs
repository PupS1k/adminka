using adminka.Model;
using adminka.ModelDTO;
using AutoMapper;
using AutoMapper.Collection;
using AutoMapper.EquivalencyExpression;
using System;
using System.Collections.Generic;
using System.Linq;

namespace adminka.Mapping
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<User, UserView>().ForMember(dto => dto.Roles, opt => opt.MapFrom(x => x.Roles.Select(roles => roles.Role).ToList()));
            CreateMap<EditUserView, User>().EqualityComparison((dto, opt) => dto.Id == opt.Id);
            CreateMap<Role, RoleView>().ReverseMap();
        }
    }
}

