using Microsoft.EntityFrameworkCore;


namespace adminka.Model
{
    public class UserContext : DbContext
    {
        public UserContext(DbContextOptions<UserContext> options) : base(options)
        {
            // Database.EnsureCreated();
        }

        public DbSet<Role> Rols { get; set; }
        public DbSet<User> Usrs { get; set; }

        public DbSet<RoleUser> RoleUsrs { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<RoleUser>().HasKey(bc => new { bc.RoleId, bc.UserId });

            modelBuilder.Entity<RoleUser>()
                .HasOne(bc => bc.User)
                .WithMany(b => b.Roles)
                .HasForeignKey(bc => bc.UserId);

            modelBuilder.Entity<RoleUser>()
                .HasOne(bc => bc.Role)
                .WithMany(c => c.Users)
                .HasForeignKey(bc => bc.RoleId);

            base.OnModelCreating(modelBuilder);
        }
    }
}
