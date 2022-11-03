namespace Koreprtycje_.DTO
{
    public class AnnouncementDto
    {
        public int UserId { get; set; } = 0;
        public string Type { get; set; } = string.Empty;
        public int SubjectId { get; set; } = 0;
        public string Description { get; set; } = string.Empty;
        public decimal Price { get; set; } = 0;
        public int LessonLength { get; set; } = 0;
    }
}
