using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Koreprtycje_.Models
{
    public class Review
    {
        [Key]
        public int Id { get; set; }

        [ForeignKey("Tutor")]
        public int AuthorId { get; set; }
        public virtual User Author { get; set; }

        [ForeignKey("Client")]
        public int PersonId { get; set; }
        public virtual User Person { get; set; }
        public string Description { get; set; }
        public int Rate { get; set; }
        public DateTime CreateDate { get; set; } = DateTime.Now;
    }
}