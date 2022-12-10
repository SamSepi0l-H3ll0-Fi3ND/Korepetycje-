using Koreprtycje_.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Model.DTO;
using Services.Interfaces;
using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;

namespace Koreprtycje_.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;
        private readonly ITutorService _tutorService;

        public UserController(IUserService userService, ITutorService tutorService)
        {
            _userService = userService;
            _tutorService = tutorService;
        }

        [HttpGet, Authorize]
        public async Task<ActionResult> GetUser(int id)
        {
            var user = _userService.GetUserById(int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier))).Result;
            if (user == null)
            {
                return NotFound("User not found");
            }

            //if (user.GetType().Equals(RoleValue.Tutor))
            //    return Ok(_tutorService.GetTutor(id));

            return Ok(user);
        }

        [HttpGet("get-tutor")]
        public async Task<ActionResult> GetTutor(int id)
        {
            var tutor = _tutorService.GetTutor(id).Result;
            if (tutor == null)
            {
                return NotFound("tutor not found");
            }
            return Ok(tutor);
        }

        [HttpPut, Authorize]
        public async Task<ActionResult> UpdateUser(UserModify user)
        {
            user.Id = int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier));
            var update = await _userService.UpdateUser(user);

            return Ok("User modified");
        }
    }
}
