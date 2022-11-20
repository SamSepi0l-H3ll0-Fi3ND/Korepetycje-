using Koreprtycje_.DTO;
using Model.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model.Models
{
    public class TutorDto
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Address { get; set; }
        public string Email { get; set; }
        public IList<AnnouncementDto> Announcements { get; set; }
        public IList<AchievementDto> Achivements { get; set; }

    }
}
