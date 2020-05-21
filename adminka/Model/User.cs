using System.ComponentModel.DataAnnotations;

namespace adminka.Model
{
    public class User
    {
        [Key]
        public int Id { get; set; }
        public string FullName { get; set; }
        public int Age { get; set; }
        public string UserName { get; set; }

        public int? RoleId { get; set; }
        public Role Role { get; set; }

    }
}
