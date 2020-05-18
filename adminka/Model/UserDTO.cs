using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace adminka.Model
{
    public class UserDTO
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string FullName { get; set; }
        [Required]
        public int Age { get; set; }
        [Required]
        public string UserName { get; set; }

        [Key]
        [ForeignKey("Role")]
        public int RoleId { get; set; }
        public RoleDTO RoleDTO { get; set; }

    }
}
