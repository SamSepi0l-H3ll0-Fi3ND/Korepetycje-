using Microsoft.AspNetCore.Identity;

namespace Koreprtycje_.Models
{
    public class User : IdentityUser<int>
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Address{ get; set; }
        public virtual List<Announcement> Announcements { get; set; }
        //public virtual List<Conversation> Conversations { get; set; }
        //public virtual List<int> Favorites { get; set; }

    }
}
