using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model.DTO
{
    public class ReviewCreateDto
    {
        public int ClientId { get; set; }
        public int TutorId { get; set; }
        public string Description { get; set; }
        public int Rate { get; set; }
        public DateTime CreateDate { get; set; }
    }
}
