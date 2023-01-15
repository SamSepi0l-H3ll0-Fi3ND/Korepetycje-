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
        public UserDto Person { get; set; }

        public UserDto Author { get; set; }

        public string Description { get; set; }
        public double Rate { get; set; }
        public DateTime CreateDate { get; set; }
    }
}
