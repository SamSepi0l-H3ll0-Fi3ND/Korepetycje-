using AutoMapper;
using Koreprtycje_.Data;
using Koreprtycje_.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Model.DTO;
using Services.Interfaces;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Tokens;
using Microsoft.Extensions.Configuration;
using Koreprtycje_.DTO;
using Microsoft.AspNetCore.Http;
using Model.Models;
using Microsoft.AspNetCore.Identity;
using System.Text.Json;

namespace Services.ConcreteServices
{
    public class AuthenticationService : BaseService, IAuthenticationService
    {
        private readonly IConfiguration _configuration;
        private readonly IHttpContextAccessor _httpContextAccessor;
        private readonly IUserService _userService;
        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;

        public AuthenticationService(ApplicationDbContext dbContext, ILogger logger, IMapper mapper, IConfiguration configuration, IHttpContextAccessor httpContextAccessor, IUserService userService, UserManager<User> userManager, SignInManager<User> signInManager) : base(dbContext, logger, mapper)
        {
            _configuration = configuration;
            _httpContextAccessor = httpContextAccessor;
            _userService = userService;
            _userManager = userManager;
            _signInManager = signInManager;
        }

        public object GetMe()
        {
            
            if(_httpContextAccessor.HttpContext != null)
            {
                var userId = _httpContextAccessor.HttpContext.User.FindFirstValue(ClaimTypes.NameIdentifier);
                var userName = _httpContextAccessor.HttpContext.User.FindFirstValue(ClaimTypes.Name);
                var userRole = _httpContextAccessor.HttpContext.User.FindFirstValue(ClaimTypes.Role);
                return new { userId, userName, userRole };
            }
            else
                return null;
        }
        public async Task<Tuple<string, int>> Login(string login, string password)
        {
            try
            {
                var user = await DbContext.Users.FirstOrDefaultAsync<User>(x => x.UserName == login);
                if (user == null)
                    throw new Exception("No user with this username");

                if (!VerifyPasswordHash(password, user.PasswordHash, user.PasswordSalt))
                {
                    throw new Exception("Wrong Password!");
                }
                string token = CreateToken(user);

                return Tuple.Create(token, user.Id);
            }
            catch (Exception ex)
            {
                Logger.LogError(ex, ex.Message);
                throw;
            }
        }
        public async Task<UserLoginDto> Register(UserRegisterDto userRegister)
        {
            try
            {
                User newUser;
                CreatePasswordHash(userRegister.Password, out byte[] passwordHash, out byte[] passwordSalt);

                if(userRegister.Type == 2)
                {
                    newUser = new Tutor() {
                        Address = userRegister.Address,
                        FirstName = userRegister.FirstName,
                        LastName = userRegister.LastName,
                        PasswordHash = passwordHash,
                        PasswordSalt = passwordSalt,
                        UserName = userRegister.UserName,
                        Email = userRegister.Email,
                    };
                }
                else if(userRegister.Type == 3)
                {
                    newUser = new Client() {
                        Address = userRegister.Address,
                        FirstName = userRegister.FirstName,
                        LastName = userRegister.LastName,
                        PasswordHash = passwordHash,
                        PasswordSalt = passwordSalt,
                        UserName = userRegister.UserName,
                        Email = userRegister.Email
                    };
                } 
                else 
                {
                    newUser = new User() { Address = userRegister.Address,
                        FirstName = userRegister.FirstName,
                        LastName = userRegister.LastName,
                        PasswordHash = passwordHash,
                        PasswordSalt = passwordSalt,
                        UserName = userRegister.UserName,
                        Email = userRegister.Email };
                }

                var result = await _userManager.CreateAsync(newUser, userRegister.Password);
                if(result.Succeeded)
                {

                }
                else
                {
                    throw new Exception(JsonSerializer.Serialize(string.Join("<br>", result.Errors.Select(x => x.Description))));
                }

                //await DbContext.Users.AddAsync(newUser);
                //await DbContext.SaveChangesAsync();
                var newUserDto = Mapper.Map<UserLoginDto>(userRegister);

                return newUserDto;
            }
            catch (Exception ex)
            {
                Logger.LogError(ex, ex.Message);
                throw;
            }
        }

        public async Task<RefreshToken> GenerateRefreshToken(int userId)
        {
            var refreshToken = new RefreshToken
            {
                Token = Convert.ToBase64String(RandomNumberGenerator.GetBytes(64)),
                Expires = DateTime.Now.AddDays(7),
                Created = DateTime.Now
            };

            var user = DbContext.Users.FindAsync(userId).Result;
            user.RefreshToken = refreshToken.Token;
            user.TokenCreated = refreshToken.Created;
            user.TokenExpires = refreshToken.Expires;
            DbContext.Update(user);
            await DbContext.SaveChangesAsync();
            return refreshToken;
            
        }

        public async Task<string> RefreshToken(string refreshToken, int userId)
        {
            try
            {
                var user = DbContext.Users.FindAsync(userId).Result;
                if (!user.RefreshToken.Equals(refreshToken))
                    throw new UnauthorizedAccessException("Invalid Refresh Token,");
                else if(user.TokenExpires < DateTime.Now)
                {
                    throw new UnauthorizedAccessException("Token expired.");
                }

                string token = CreateToken(user);
                return token;
            }
            catch (Exception ex)
            {
                Logger.LogError(ex, ex.Message);
                throw;
            }

        }

        private string CreateToken(User user)
        {
            List<Claim> claims = new List<Claim>
            {
                new Claim(ClaimTypes.Name, user.UserName),
                new Claim(ClaimTypes.Role, user.GetType().Name),
                new Claim(ClaimTypes.NameIdentifier, user.Id.ToString())
            };

            var key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes(_configuration.GetSection("AppSettings:Token").Value));

            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

            var token = new JwtSecurityToken(
                claims: claims,
                expires: DateTime.Now.AddDays(1),
                signingCredentials: creds
            );

            var jwt = new JwtSecurityTokenHandler().WriteToken(token);

            return jwt;
        }

        private void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            using (var hmac = new HMACSHA512())
            {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }

        private bool VerifyPasswordHash(string password, byte[] passwordHash, byte[] passwordSalt)
        {
            using (var hmac = new HMACSHA512(passwordSalt))
            {
                var computedHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
                return computedHash.SequenceEqual(passwordHash);
            }
        }


    }
}
