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
        private readonly ApplicationDbContext _context;
        private readonly IAnnouncementService _announcementService;

        public AnnouncementsController(ApplicationDbContext context, IAnnouncementService announcementService )
        {
            _announcementService = announcementService;
            _context = context;
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
                return NotFound();
            }

            return announcement;
        }

        // PUT: api/Announcements/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAnnouncement(int id, Announcement announcement)
        {
            if (id != announcement.Id)
            {
                return BadRequest();
            }

            _context.Entry(announcement).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AnnouncementExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
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
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAnnouncement(int id)
        {
            var announcement = await _context.Announcements.FindAsync(id);
            if (announcement == null)
            {
                return NotFound();
            }

            _context.Announcements.Remove(announcement);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool AnnouncementExists(int id)
        {
            return _context.Announcements.Any(e => e.Id == id);
        }
    }
}
