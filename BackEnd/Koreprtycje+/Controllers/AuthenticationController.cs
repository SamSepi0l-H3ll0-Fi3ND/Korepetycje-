using Koreprtycje_.Data;
using Koreprtycje_.DTO;
using Koreprtycje_.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using Model.DTO;
using Model.Models;
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
        private readonly IConfiguration _configuration;
        private readonly IAuthenticationService _authenticationService;
        private readonly IUserService _userService;
        private readonly UserManager<User> _userManager;

        public AuthenticationController(IConfiguration configuration, IAuthenticationService authenticationService, IUserService userService, UserManager<User> userManager)
        {
            _configuration = configuration;
            _authenticationService = authenticationService;
            _userService = userService;
            _userManager = userManager;
        }

        [HttpGet, Authorize]
        public ActionResult<object> GetMe()
        {
            var user = _authenticationService.GetMe();
            return Ok(user);
        }

        
        [HttpPost("register")]
        public async Task<ActionResult<string>> Register(UserRegisterDto request)
        {
            try {
                var userDto = await _authenticationService.Register(request);
                var token = await _authenticationService.Login(userDto.UserName, userDto.Password);
                return Ok(token);
            }catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
            
        }

        [HttpPost("login")]
        public async Task<ActionResult> Login(UserLoginDto req)
        {

            var token = await _authenticationService.Login(req.UserName, req.Password);
            var refreshToken = _authenticationService.GenerateRefreshToken(token.Item2);
            SetRefreshToken(refreshToken.Result, token.Item2);

            return Ok(token.Item1);
        }

        [HttpPost("refresh-token")]
        public async Task<ActionResult<string>> RefreshToken()
        {
            var refreshToken = Request.Cookies["refreshToken"];
            var userId = int.Parse(Request.Cookies["User"]);
            var token = _authenticationService.RefreshToken(refreshToken, userId);
            var newRefreshToken = _authenticationService.GenerateRefreshToken(userId);
            SetRefreshToken(newRefreshToken.Result, userId);

            return token.Result;
        }

        private void SetRefreshToken(RefreshToken newRefreshToken, int userId)
        {
            var cookieOptions = new CookieOptions
            {
                HttpOnly = true,
                Expires = newRefreshToken.Expires
            };
            Response.Cookies.Append("refreshToken", newRefreshToken.Token, cookieOptions);
            Response.Cookies.Append("User", userId.ToString(), cookieOptions);
        }
    }
}
