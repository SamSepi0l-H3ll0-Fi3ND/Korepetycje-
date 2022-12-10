using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Koreprtycje_.Models
{
    public class Review
    {
        [Key]
        public int Id { get; set; }

        [ForeignKey("Tutor")]
        public int TutorId { get; set; }
        public virtual Tutor Tutor { get; set; }

        [ForeignKey("Client")]
        public int ClientId { get; set; }
        public virtual User Client { get; set; }
        public string Description { get; set; }
        public int Rate { get; set; }
        public DateTime CreateDate { get; set; } = DateTime.Now;
    }
}