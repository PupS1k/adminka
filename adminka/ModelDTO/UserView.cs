using adminka.ModelDTO;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace adminka.Model
{
    public class UserView
    {
        [Key]
        public int Id { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(100)")]
        public string FullName { get; set; }
        [Required]
        [Column(TypeName = "int")]
        public int Age { get; set; }
        [Required]
        [Column(TypeName = "varchar(20)")]
        public string UserName { get; set; }

        public List<RoleUserView> Roles { get; set; }

        public UserView()
        {
            Roles = new List<RoleUserView>();
        }
    }
}
