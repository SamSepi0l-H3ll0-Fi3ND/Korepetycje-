using AutoMapper;
using Koreprtycje_.Data;
using Koreprtycje_.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Model.Models;
using Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.ConcreteServices
{
    public class TutorService : BaseService, ITutorService
    {
        public TutorService(ApplicationDbContext dbContext, ILogger logger, IMapper mapper) : base(dbContext, logger, mapper)
        {
        }

        public async Task<TutorDto> GetTutor(int id)
        {
            try
            {
                if (id == null)
                    throw new ArgumentNullException("Id can't be null");
                var tutor = await DbContext.Users.OfType<Tutor>()
                        .Include(a => a.Announcements)
                        .Include(a => a.Achievements)
                        .Include(r => r.Reviews)
                        .FirstOrDefaultAsync(x => x.Id == id);
                        
                if (tutor == null)
                    throw new Exception("No user with this id");
                var tutorDto = Mapper.Map<TutorDto>(tutor);
                return tutorDto;
            }
            catch (Exception ex)
            {
                Logger.LogError(ex, ex.Message);
                throw;
            }
        }
    }
}
