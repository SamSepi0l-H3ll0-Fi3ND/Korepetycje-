using AutoMapper;
using Koreprtycje_.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Model.DTO;
using Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.ConcreteServices
{
    public class UserService : BaseService, IUserService
    {

        public UserService(ApplicationDbContext dbContext, ILogger logger, IMapper mapper) : base(dbContext, logger, mapper)
        {

        }

        public async Task<UserDto> GetUserById(int id)
        {
            try
            {
                if(id == null)
                    throw new ArgumentNullException("Id can't be null");
                var user = await DbContext.Users.FirstOrDefaultAsync(x=>x.Id == id);
                if (user == null)
                    throw new Exception("No user with this id");
                var userDto = Mapper.Map<UserDto>(user);
                return userDto;
            }
            catch (Exception ex)
            {
                Logger.LogError(ex, ex.Message);
                throw;
            }
        }
    }
}
