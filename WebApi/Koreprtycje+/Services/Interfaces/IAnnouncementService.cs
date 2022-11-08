using Koreprtycje_.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.Interfaces
{
    public interface IAnnouncementService
    {
        public Task<IEnumerable<AnnouncementDto>> GetAnnouncements(); 
    }
}
