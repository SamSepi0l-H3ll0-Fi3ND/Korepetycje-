using Koreprtycje_.DTO;
using Model.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.Interfaces
{
    public interface IAuthenticationService
    {
        public Task<string> Login(string login, string password);
        public Task<UserLoginDto> Register(UserRegisterDto userRegister);
        public object GetMe();
    }
}
