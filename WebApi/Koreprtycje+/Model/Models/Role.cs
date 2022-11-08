using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.AspNetCore.Identity;

namespace Koreprtycje_.Models
{
    public class Role : IdentityRole<int>
    {
        public virtual RoleValue RoleValue { get; set; }
        public Role() { }
    }
}
