namespace Koreprtycje_.Models
{
    public class Review
    {
        public int Id { get; set; }
        public int TutorId { get; set; }
        public int ClientId { get; set; }
        public string Author { get; set; }
        public string Description { get; set; }
        public int Rate { get; set; }
        public DateTime CreateDate { get; set; }
    }
}