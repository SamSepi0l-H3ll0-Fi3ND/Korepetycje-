using Model.DTO;

namespace Koreprtycje_.DTO
{
    public class AnnouncementDto
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public string Type { get; set; }
        public int SubjectId { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public int LessonLength { get; set; }
    }
}
