using Koreprtycje_.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model.DTO
{
    public class AnnouncementCreate
    {
        public int UserId { get; set; }
        public string Type { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public int LessonLength { get; set; }
        public IList<TagDto> Tags { get; set; }
        public virtual SubjectDto Subject { get; set; }
    }
}
