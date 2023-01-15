using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Koreprtycje_.Models
{
    public class Review
    {
        [Key]
        public int Id { get; set; }


        [ForeignKey("Person")]
        public int PersonId { get; set; }
        public virtual User Person { get; set; }


        [ForeignKey("Author")]
        public int AuthorId { get; set; }
        public virtual User Author { get; set; }

        public string Description { get; set; }
        public double Rate { get; set; }
        public DateTime CreateDate { get; set; } = DateTime.Now;
    }
}