using Model.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.Interfaces
{
    public interface IReviewService
    {
        public Task<Boolean> AddReview(ReviewCreateDto reviewCreate);
        public Task<Boolean> DeleteReview(int id);
    }
}
