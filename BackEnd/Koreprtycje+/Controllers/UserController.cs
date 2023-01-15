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

        [HttpGet, Authorize(Roles = "User, Administrator")]
        public async Task<ActionResult<OtherUserDto>> GetMe()
        {
            var user = await _userService.GetMe(int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier)));
            if (user == null)
            {
                return NotFound("User not found");
            }

            return Ok(user);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<OtherUserDto>> GetUserById(int id)
        {
            var user = await _userService.GetUserById(id);
            if (user == null)
            {
                return NotFound("User not found");
            }

            return Ok(user);
        }

        [HttpPut, Authorize(Roles ="User, Administrator")]
        public async Task<ActionResult> UpdateUser(UserModify user)
        {
            user.Id = int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier));
            var update = await _userService.UpdateUser(user);

            return Ok("User modified");
        }

        [HttpDelete, Authorize]
        public async Task<ActionResult> DeleteMe()
        {
            var myId = int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier));
            var result = await _userService.DeleteUser(myId);

            return Ok(result);
        }

        [HttpDelete("{id}"), Authorize(Roles="Administrator")]
        public async Task<ActionResult> DeleteUser(int id)
        {
            var result = await _userService.DeleteUser(id);

            return Ok(result);
        }
    }
}
