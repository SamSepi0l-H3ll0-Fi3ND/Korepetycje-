using AutoMapper;
using Koreprtycje_.Data;
using Microsoft.Extensions.Logging;
using Model.DTO;
using Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace Services.ConcreteServices
{
    public class SubjectService : BaseService, ISubjectService
    {
        public SubjectService(ApplicationDbContext dbContext, ILogger logger, IMapper mapper) : base(dbContext, logger, mapper)
        {
        }

        public async Task<IEnumerable<SubjectDto>> GetSubjects()
        {
            try
            {
                var subjects = await DbContext.Subjects.ToListAsync();
                var subjectsDto = Mapper.Map<List<SubjectDto>>(subjects);
                return subjectsDto;
            }
            catch (Exception ex)
            {
                Logger.LogError(ex, ex.Message);
                throw;
            }
        }
    }
}
