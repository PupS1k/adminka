namespace adminka.Model
{
    public class UserView
    {
        public int Id { get; set; }
        public string FullName { get; set; }
        public int Age { get; set; }
        public string UserName { get; set; }

        public RoleView Role { get; set; }
    }
}
