﻿using Koreprtycje_.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model.DTO
{
    public class OtherUserDto
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Address { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public string Rate { get; set; }
        public string UserName { get; set; }
        public List<AnnouncementDto> Announcements { get;set; }
        public List<ReviewDto> Reviews { get;set; }

    }
}
