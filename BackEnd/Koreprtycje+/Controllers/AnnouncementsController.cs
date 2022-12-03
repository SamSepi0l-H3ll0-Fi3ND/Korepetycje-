using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Koreprtycje_.Data;
using Koreprtycje_.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Koreprtycje_.DTO;
using System.Security.Claims;
using Services.Interfaces;
using Model.DTO;

namespace Koreprtycje_.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AnnouncementsController : ControllerBase
    {
        private readonly IAnnouncementService _announcementService;

        public AnnouncementsController(IAnnouncementService announcementService )
        {
            _announcementService = announcementService;
        }

        // GET: api/Announcements
        [HttpGet]
        public async Task<IEnumerable<AnnouncementDto>> GetAnnouncements()
        {
            return await _announcementService.GetAnnouncements();
        }
        // GET: api/Announcements/5
        [HttpGet("{id}")]
        public async Task<ActionResult<AnnouncementDto>> GetAnnouncement(int id)
        {
            var announcement = await _announcementService.GetAnnouncementById(id);

            if (announcement == null)
            {
                return NotFound("Announcement not found");
            }

            return announcement;
        }


        // POST: api/Announcements
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost, Authorize(Roles = "Tutor,Administrator,Client")]
        public async Task<ActionResult<AnnouncementDto>> PostAnnouncement(AnnouncementCreate announcement)
        {
            announcement.UserId = int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier));
            
            var announcementId = await _announcementService.PostAnnouncement(announcement);

            return await _announcementService.GetAnnouncementById(announcementId);
        }

        // DELETE: api/Announcements/5
        [HttpDelete("{announcementId}"), Authorize]
        public async Task<IActionResult> DeleteAnnouncement(int announcementId)
        {
            var userId = int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier));

            _announcementService.DeleteAnnouncement(announcementId, userId);
            return Ok("Announcement removed");
        }

        [HttpPut, Authorize]
        public async Task<ActionResult> UpdateAnnouncement(AnnouncementModify announcement)
        {
            var currentUserId = int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier));
            await _announcementService.UpdateAnnouncement(announcement, currentUserId);

            return Ok("Announcement modified");
        }
    }
}
