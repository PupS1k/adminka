using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace adminka.Model
{
    public class User
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

        public virtual List<RoleUser> Roles { get; set; }

        public User()
        {
            Roles = new List<RoleUser>();
        }

    }
}
