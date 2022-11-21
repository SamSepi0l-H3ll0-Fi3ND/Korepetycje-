using AutoMapper;
using Koreprtycje_.Data;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.ConcreteServices
{
    public abstract class BaseService
    {
        protected readonly ApplicationDbContext DbContext;
        protected readonly ILogger Logger;
        protected readonly IMapper Mapper;

        public BaseService(ApplicationDbContext dbContext, ILogger logger, IMapper mapper)
        {
            DbContext = dbContext;
            Logger = logger;
            Mapper = mapper;
        }
    }
}
