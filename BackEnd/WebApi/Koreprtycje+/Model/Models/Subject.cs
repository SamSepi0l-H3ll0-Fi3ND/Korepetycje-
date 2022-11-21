using System.ComponentModel.DataAnnotations;

namespace Koreprtycje_.Models
{
    public class Subject
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Category { get; set; }
    }
}