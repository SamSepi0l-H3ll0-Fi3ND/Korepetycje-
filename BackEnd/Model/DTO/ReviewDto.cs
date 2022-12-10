using Koreprtycje_.Models;
using Model.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model.DTO
{
    public class ReviewDto
    {
        public int Id { get; set; }

        public int TutorId { get; set; }
        public string Author { get; set; }
        public string Description { get; set; }
        public int Rate { get; set; }
        public DateTime CreateDate { get; set; }
    }
}
