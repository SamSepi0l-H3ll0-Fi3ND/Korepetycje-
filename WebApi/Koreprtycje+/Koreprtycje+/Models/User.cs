using Microsoft.AspNetCore.Identity;

namespace Koreprtycje_.Models
{
    public class User : IdentityUser<int>
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Address{ get; set; }
        public List<Announcement> Announcements { get; set; }
        public List<Conversation> Conversations { get; set; }
        public List<int> Favorites { get; set; }

    }
}
