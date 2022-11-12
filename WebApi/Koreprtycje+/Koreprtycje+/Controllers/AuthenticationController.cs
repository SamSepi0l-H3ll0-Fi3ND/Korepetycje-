using Koreprtycje_.Data;
using Koreprtycje_.DTO;
using Koreprtycje_.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using Model.DTO;
using Services.Interfaces;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;

namespace Koreprtycje_.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthenticationController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        private readonly IConfiguration _configuration;
        private readonly IAuthenticationService _authenticationService;

        public AuthenticationController(ApplicationDbContext dbContext, IConfiguration configuration, IAuthenticationService authenticationService)
        {
            _context = dbContext;
            _configuration = configuration;
            _authenticationService = authenticationService;
        }

        [HttpPost("register")]
        public async Task<ActionResult<string>> Register(UserRegisterDto request)
        {
            var userDto = await _authenticationService.Register(request);
            var token = await _authenticationService.Login(userDto.UserName, userDto.Password);
            return Ok(token);
        }

        [HttpPost("login")]
        public async Task<ActionResult<string>> Login(UserLoginDto req)
        {

            var token = await _authenticationService.Login(req.UserName, req.Password);

            return Ok(token);
        }

    }
}
