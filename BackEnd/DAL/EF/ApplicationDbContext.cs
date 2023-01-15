using Koreprtycje_.Models;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Model.Models;

namespace Koreprtycje_.Data
{
    public class ApplicationDbContext : IdentityDbContext<User, Role, int>
    {
        public virtual DbSet<Announcement> Announcements { get; set; }
        public virtual DbSet<Review> Reviews { get; set; }
        public virtual DbSet<Subject> Subjects { get; set; }


        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<User>()
                .ToTable("AspNetUsers")
                .HasDiscriminator<int>("UserType")
                .HasValue<User>((int)RoleValue.User)
                .HasValue<Administrator>((int)RoleValue.Administrator);

            builder.Entity<Announcement>()
                .Property(p => p.Price)
                .HasColumnType("decimal(14,2)");
            

            builder.Entity<Announcement>()
                .HasOne(u => u.User)
                .WithMany(a => a.Announcements)
                .HasForeignKey(a => a.UserId)
                .OnDelete(DeleteBehavior.Cascade);

            builder.Entity<Review>()
                .HasOne(r => r.Author)
                .WithMany(t => t.Reviews)
                .HasForeignKey(r => r.AuthorId)
                .OnDelete(DeleteBehavior.Restrict);
        }

    }
}
