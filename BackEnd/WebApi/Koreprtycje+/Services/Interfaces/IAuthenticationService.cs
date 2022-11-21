using Koreprtycje_.DTO;
using Model.DTO;
using Model.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.Interfaces
{
    public interface IAuthenticationService
    {
        public Task<Tuple<string, int>> Login(string login, string password);
        public Task<UserLoginDto> Register(UserRegisterDto userRegister);
        public object GetMe();
        public Task<RefreshToken> GenerateRefreshToken(int userId);
        public Task<string> RefreshToken(string refreshToken, int userId);
        
    }
}
