using Microsoft.AspNetCore.Identity;

namespace Koreprtycje_.Models
{
    public class User : IdentityUser<int>
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Address{ get; set; }
        public double Rate { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
        public string RefreshToken { get; set; } = string.Empty;
        public DateTime TokenCreated { get; set; }
        public DateTime TokenExpires { get; set; }
        public virtual List<Announcement> Announcements { get; set; }
        public string Description { get; set; } = string.Empty;

        //public virtual List<Review> Reviews { get; set; }
    }
}
