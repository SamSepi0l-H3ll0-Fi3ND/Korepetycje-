using Koreprtycje_.DTO;
using Model.DTO;
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
        public Task<AnnouncementDto> GetAnnouncementById(int id);
        public Task<int> PostAnnouncement(AnnouncementCreate announcementDto);
    }
}
