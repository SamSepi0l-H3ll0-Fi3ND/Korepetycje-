using AutoMapper;
using Koreprtycje_.Data;
using Koreprtycje_.Models;
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

        public async Task<bool> DeleteUser(int id)
        {
            try
            {
                if (id == null)
                    throw new ArgumentNullException("Id can't be null");
                var user = await DbContext.Users.Include(x => x.Announcements).Include(r => r.Reviews).FirstOrDefaultAsync(x => x.Id == id);
                if (user == null)
                    throw new Exception("No user with this id");
                DbContext.Users.Remove(user);
                await DbContext.SaveChangesAsync();

                return true;
            }
            catch (Exception ex)
            {
                Logger.LogError(ex, ex.Message);
                throw;
            }
        }

        public async Task<OtherUserDto> GetMe(int id)
        {
            try
            {
                if(id == null)
                    throw new ArgumentNullException("Id can't be null");
                var user = await DbContext.Users.Include(x => x.Announcements).Include(r => r.Reviews).FirstOrDefaultAsync(x => x.Id == id);
                if (user == null)
                    throw new Exception("No user with this id");
                var userDto = Mapper.Map<OtherUserDto>(user);

                return userDto;
            }
            catch (Exception ex)
            {
                Logger.LogError(ex, ex.Message);
                throw;
            }
        }

        public async Task<OtherUserDto> GetUserById(int id)
        {
            try
            {
                if (id == null)
                    throw new ArgumentNullException("Id can't be null");
                var user = await DbContext.Users.Include(x=> x.Announcements).Include(r => r.Reviews).FirstOrDefaultAsync(x => x.Id == id);
                if (user == null)
                    throw new Exception("No user with this id");
                var userDto = Mapper.Map<OtherUserDto>(user);

                return userDto;
            }
            catch (Exception ex)
            {
                Logger.LogError(ex, ex.Message);
                throw;
            }
        }

        public async Task<Boolean> UpdateUser(UserModify user)
        {
            try 
            {
                var userModel = await DbContext.Users.FirstOrDefaultAsync(x => x.Id == user.Id);
                userModel.Address = user.Address;
                userModel.PhoneNumber = user.PhoneNumber;
                userModel.FirstName = user.FirstName;
                userModel.LastName = user.LastName;
                userModel.Email = user.Email;
                userModel.Description = user.Description;
                
                DbContext.Users.Update(userModel);
                await DbContext.SaveChangesAsync();
                return true;

            }
              catch (Exception ex)
            {
                Logger.LogError(ex, ex.Message);
                throw;
            }
        }
    }
}
