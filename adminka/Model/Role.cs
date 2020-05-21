using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace adminka.Model
{
    public class Role
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Access { get; set; }

        public List<User> Users { get; set; }
    }
}
