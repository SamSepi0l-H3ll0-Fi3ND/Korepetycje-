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
        public Task<bool> PostAnnouncement(AnnouncementCreate announcementDto);
        public bool DeleteAnnouncement(int announcementId, int userId, string userRole);
        public Task<Boolean> UpdateAnnouncement(AnnouncementModify announcement, int userId);
    }
}
