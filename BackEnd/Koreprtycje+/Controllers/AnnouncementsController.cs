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
        [HttpPost, Authorize(Roles = "User, Administrator")]
        public async Task<ActionResult<bool>> PostAnnouncement(AnnouncementCreate newAnnouncement)
        {
            newAnnouncement.UserId = int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier));
            
            var result = await _announcementService.PostAnnouncement(newAnnouncement);

            return Ok(result);
        }

        // DELETE: api/Announcements/5
        [HttpDelete("{announcementId}"), Authorize(Roles = "User, Administrator")]
        public async Task<ActionResult> DeleteAnnouncement(int announcementId)
        {
            var userId = int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier));
            var userRole = User.FindFirstValue(ClaimTypes.Role);
            var result = _announcementService.DeleteAnnouncement(announcementId, userId, userRole);
            return Ok(result);
        }

        [HttpPut, Authorize(Roles="User, Administrator")]
        public async Task<ActionResult> UpdateAnnouncement(AnnouncementModify announcement)
        {
            var currentUserId = int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier));
            await _announcementService.UpdateAnnouncement(announcement, currentUserId);

            return Ok("Announcement modified");
        }
    }
}
