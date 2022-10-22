using Koreprtycje_.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Koreprtycje_.Data
{
    public class ApplicationDbContext : IdentityDbContext<UserSecretsConfigurationExtensions, Role, int>
    {
        public virtual DbSet<Announcement> Announcements { get; set; }

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }
    }
}
