using adminka.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace adminka.ModelDTO
{
    public class RoleUserView
    {
        public int? RoleId { get; set; }
        public RoleView Role { get; set; }
    }
}
