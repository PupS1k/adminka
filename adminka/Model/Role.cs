using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace adminka.Model
{
    public class Role
    {
        [Key]
        public int Id { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(100)")]
        public string Name { get; set; }
        [Required]
        [Column(TypeName = "varchar(20)")]
        public string Access { get; set; }

        public virtual List<RoleUser> Users { get; set; }

        public Role()
        {
            Users = new List<RoleUser>();
        }
    }
}
