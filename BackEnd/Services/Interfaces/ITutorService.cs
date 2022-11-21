using Model.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.Interfaces
{
    public interface ITutorService
    {
        public Task<TutorDto> GetTutor(int id);
    }
}
