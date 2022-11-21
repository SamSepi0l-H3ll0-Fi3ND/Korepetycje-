using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Koreprtycje_.Models
{
    public class Announcement
    {
        [Key]
        public int Id { get; set; }
        
        [ForeignKey("User")]
        public int UserId { get; set; }
        public virtual User User { get; set; }
        public string Type { get; set; }
        
        [ForeignKey("Subject")]
        public int SubjectId { get; set; }
        public virtual Subject Subject { get; set; }

        public string Description { get; set; }
        public decimal Price { get; set; }
        public int LessonLength { get; set; }
        public List<Tag> Tags { get; set; }

    }
}
