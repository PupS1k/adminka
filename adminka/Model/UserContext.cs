using Microsoft.EntityFrameworkCore;


namespace adminka.Model
{
    public class UserContext : DbContext
    {
        public UserContext(DbContextOptions<UserContext> options) : base(options)
        {
            // Database.EnsureCreated();
        }

        public DbSet<Role> Roles { get; set; }
        public DbSet<User> Users { get; set; }

        public DbSet<RoleUser> RoleUsers { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<RoleUser>().HasKey(bc => new { bc.RoleId, bc.UserId });

            modelBuilder.Entity<RoleUser>()
                .HasOne(bc => bc.User)
                .WithMany(b => b.Roles)
                .OnDelete(DeleteBehavior.Cascade)
                .HasForeignKey(bc => bc.UserId);

            modelBuilder.Entity<RoleUser>()
                .HasOne(bc => bc.Role)
                .WithMany(c => c.Users)
                .OnDelete(DeleteBehavior.Cascade)
                .HasForeignKey(bc => bc.RoleId);

            base.OnModelCreating(modelBuilder);
        }
    }
}
