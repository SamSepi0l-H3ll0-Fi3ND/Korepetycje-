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

        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpGet, Authorize(Roles ="User, Administrator")]
        public async Task<ActionResult<UserDto>> GetUser()
        {
            var user = await _userService.GetUserById(int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier)));
            if (user == null)
            {
                return NotFound("User not found");
            }

            return Ok(user);
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
