namespace Koreprtycje_.Models
{
    public class Announcement
    {
        public int Id { get; set; }
        public string UserId { get; set; }
        public string Type { get; set; }
        public Subject Subject { get; set; }
    }
}
