using AutoMapper;
using Koreprtycje_.Data;
using Koreprtycje_.DTO;
using Koreprtycje_.Models;
using Microsoft.Extensions.Logging;
using Services.Interfaces;
using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.ConcreteServices
{
    public class AnnouncementService : BaseService, IAnnouncementService
    {
        public AnnouncementService(ApplicationDbContext dbContext, ILogger logger, IMapper mapper) : base(dbContext, logger, mapper)
        {
        }

        public async Task<IEnumerable<AnnouncementDto>> GetAnnouncements()
        {
            try
            {
                var announcements = await DbContext.Announcements.ToListAsync<Announcement>();
                var announcementsDto = Mapper.Map<IEnumerable<AnnouncementDto>>(announcements);
                return announcementsDto;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
