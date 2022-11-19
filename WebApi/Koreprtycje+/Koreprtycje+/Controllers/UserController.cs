using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Model.DTO;
using Services.Interfaces;

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

        [HttpGet("{id}")]
        public async Task<ActionResult<UserDto>> GetAnnouncement(int id)
        {
            var user = await _userService.GetUserById(id);

            if (user == null)
            {
                return NotFound("User not found");
            }

            return Ok(user);
        }
    }
}
