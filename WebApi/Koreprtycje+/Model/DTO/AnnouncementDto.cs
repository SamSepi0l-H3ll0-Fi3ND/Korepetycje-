namespace Koreprtycje_.DTO
{
    public class AnnouncementDto
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public string Type { get; set; }
        public int SubjectId { get; set; } = 0;
        public string Description { get; set; }
        public decimal Price { get; set; }
        public int LessonLength { get; set; }
    }
}
