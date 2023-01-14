using Model.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.Interfaces
{
    public interface IUserService
    {
        public Task<OtherUserDto> GetMe(int id);
        
        public Task<OtherUserDto> GetUserById(int id);

        public Task<Boolean> UpdateUser(UserModify user);
    }
}
