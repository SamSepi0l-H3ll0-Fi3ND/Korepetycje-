using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Koreprtycje_.Models
{
    public class Achievement
    {
        [Key]
        public int Id { get; set; }
        [ForeignKey("Tutor")]
        public int TutorID { get; set; }
        public virtual Tutor Tutor { get; set; }
        public string Name { get; set; }
        public DateTime AchievementDate { get; set; }
    }
}
