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

namespace Services.ConcreteServices
{
    public class AuthenticationService : BaseService, IAuthenticationService
    {
        private readonly IConfiguration _configuration;

        private readonly IHttpContextAccessor _httpContextAccessor;

        public AuthenticationService(ApplicationDbContext dbContext, ILogger logger, IMapper mapper, IConfiguration configuration, IHttpContextAccessor httpContextAccessor) : base(dbContext, logger, mapper)
        {
            _configuration = configuration;
            _httpContextAccessor = httpContextAccessor;
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
        public async Task<string> Login(string login, string password)
        {
            try
            {
                var user = await DbContext.Users.FirstAsync<User>(x => x.UserName == login);
                if (user == null)
                    throw new Exception("No user with this username");

                if (!VerifyPasswordHash(password, user.PasswordHash, user.PasswordSalt))
                {
                    throw new Exception("Wrong Password!");
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

                await DbContext.Users.AddAsync(newUser);
                await DbContext.SaveChangesAsync();
                var newUserDto = Mapper.Map<UserLoginDto>(userRegister);

                return newUserDto;
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
