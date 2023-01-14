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
using Model.Models;

namespace Services.ConcreteServices
{
    public class AnnouncementService : BaseService, IAnnouncementService
    {
        public AnnouncementService(ApplicationDbContext dbContext, ILogger logger, IMapper mapper) : base(dbContext, logger, mapper)
        {
        }

        public bool DeleteAnnouncement(int announcementId, int userId, string userRole)
        {
            try
            {
                if(announcementId == null || announcementId.Equals(""))
                    throw new ArgumentNullException("Id can't be null");

                var announcementToDelete = DbContext.FindAsync<Announcement>(announcementId).Result;
                if (announcementToDelete == null)
                    throw new ArgumentNullException("There is no announcement with this Id");

                if (announcementToDelete.UserId != userId)
                    if(!userRole.Equals("Administrator"))
                        throw new ArgumentException("User is not author or administrator");

                DbContext.Remove(announcementToDelete);
                DbContext.SaveChangesAsync();
                return true;
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
                var announcement = await DbContext.Announcements.Include(x => x.User).Include(x=>x.Subject).FirstOrDefaultAsync(x => x.Id == id);
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
                var announcements = await DbContext.Announcements
                    .Include(u => u.User)
                    .Include(s => s.Subject)
                    .ToListAsync<Announcement>();
                var announcementsDto = Mapper.Map<IEnumerable<AnnouncementDto>>(announcements);
                return announcementsDto;
            }
            catch (Exception ex)
            {
                Logger.LogError(ex, ex.Message);
                throw;
            }
        }

        public async Task<bool> PostAnnouncement(AnnouncementCreate newAnnouncementDto)
        {
            try
            {
                if(newAnnouncementDto == null)
                    throw new ArgumentNullException($"Dto parameter is null");
                var announcement = Mapper.Map<Announcement>(newAnnouncementDto);
                await DbContext.Announcements.AddAsync(announcement);
                await DbContext.SaveChangesAsync();

                return true;

            }
            catch (Exception ex)
            {
                Logger.LogError(ex, ex.Message);
                throw;
            }
        }

        public async Task<Boolean> UpdateAnnouncement(AnnouncementModify announcementModification, int userId)
        {
            try
            {
                if (announcementModification == null)
                    throw new ArgumentNullException($"Dto parameter is null");

                var announcement = await DbContext.Announcements.FirstOrDefaultAsync(x =>x.Id == announcementModification.Id);
                if (announcement == null)
                    throw new ArgumentNullException("No annoucement with this Id");
                if (userId != announcement.UserId)
                    throw new ArgumentException("User is not author of the announcement");

                announcement.LessonLength = announcementModification.LessonLength;
                announcement.Price = announcementModification.Price;
                announcement.Description = announcementModification.Description;
                DbContext.Announcements.Update(announcement);
                await DbContext.SaveChangesAsync();
                return true;
            }
            catch (Exception ex)
            {
                Logger.LogError(ex, ex.Message);
                throw;
            }
        }
    }
}
