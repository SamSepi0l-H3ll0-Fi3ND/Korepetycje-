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
using Model.DTO;

namespace Services.ConcreteServices
{
    public class AnnouncementService : BaseService, IAnnouncementService
    {
        public AnnouncementService(ApplicationDbContext dbContext, ILogger logger, IMapper mapper) : base(dbContext, logger, mapper)
        {
        }

        public async void DeleteAnnouncement(int announcementId, int userId)
        {
            try
            {
                if(announcementId == null)
                    throw new ArgumentNullException("Id can't be null");

                var announcementToDelete = DbContext.FindAsync<Announcement>(announcementId).Result;
                if (announcementToDelete == null)
                    throw new ArgumentNullException("There is no announcement with this Id");
                if (announcementToDelete.UserId != userId)
                    if (DbContext.Users.FindAsync(userId).Result.GetType() != typeof(Administrator))
                        throw new ArgumentException("User is not author or administrator");
                DbContext.Remove(announcementToDelete);
            }
            catch (Exception ex)
            {
                Logger.LogError(ex, ex.Message);
                throw;
            }
        }

        public async Task<AnnouncementDto> GetAnnouncementById(int id)
        {
            try
            {
                var announcement = await DbContext.Announcements.FirstAsync(x => x.Id == id);
                if (announcement == null)
                    throw new Exception("No announcement with this ID");
                var announcementDTO = Mapper.Map<AnnouncementDto>(announcement);
                return announcementDTO;
            }
            catch (Exception ex)
            {
                Logger.LogError(ex, ex.Message);
                throw;
            }    
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
                Logger.LogError(ex, ex.Message);
                throw;
            }
        }

        public async Task<int> PostAnnouncement(AnnouncementCreate announcementDto)
        {
            try
            {
                if(announcementDto == null)
                    throw new ArgumentNullException($"Dto parameter is null");
                var announcement = Mapper.Map<Announcement>(announcementDto);
                var ID = await DbContext.Announcements.AddAsync(announcement);
                await DbContext.SaveChangesAsync();

                return ID.Entity.Id;

            }
            catch (Exception ex)
            {
                Logger.LogError(ex, ex.Message);
                throw;
            }
        }
    }
}
