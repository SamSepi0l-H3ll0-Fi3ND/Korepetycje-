using Koreprtycje_.Models;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Koreprtycje_.Data
{
    public class ApplicationDbContext : IdentityDbContext<User, Role, int>
    {
        public virtual DbSet<Announcement> Announcements { get; set; }
        public virtual DbSet<Achievement> Achievements { get; set; }
        //public virtual DbSet<Conversation> Conversations { get; set; }
        //public virtual DbSet<Review> Reviews { get; set; }
        public virtual DbSet<Subject> Subjects { get; set; }
        public virtual DbSet<Tag> Tags { get; set; }


        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<User>()
                .ToTable("AspNetUsers")
                .HasDiscriminator<int>("UserType")
                .HasValue<User>((int)RoleValue.User)
                .HasValue<Client>((int)RoleValue.Client)
                .HasValue<Administrator>((int)RoleValue.Administrator)
                .HasValue<Tutor>((int)RoleValue.Tutor);
            
            //builder.Entity<Review>()
            //    .HasOne(r => r.Tutor)
            //    .WithMany(t => t.Reviews)
            //    .HasForeignKey(r => r.TutorId)
            //    .OnDelete(DeleteBehavior.Cascade);


            //builder.Entity<Conversation>()
            //    .HasOne(c => c.Sender)
            //    .WithMany(u => u.Conversations)
            //    .HasForeignKey(c => c.SenderId);

            //builder.Entity<Conversation>()
            //    .HasOne(c => c.Recipient)
            //    .WithMany(u => u.Conversations)
            //    .HasForeignKey(c => c.RecipientId);
        }

    }
}
