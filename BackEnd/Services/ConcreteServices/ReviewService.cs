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
    public class ReviewService : BaseService, IReviewService
    {
        public ReviewService(ApplicationDbContext dbContext, ILogger logger, IMapper mapper) : base(dbContext, logger, mapper)
        {
        }
        public async Task<bool> AddReview(ReviewCreateDto reviewCreate)
        {
            try
            {
                if (reviewCreate == null)
                    throw new ArgumentNullException("Dto can't be null");
                var reviewModel = Mapper.Map<Review>(reviewCreate);

                await DbContext.Reviews.AddAsync(reviewModel);
                await DbContext.SaveChangesAsync();

                var reviews = await DbContext.Reviews.Where(rev => rev.PersonId == reviewCreate.PersonId).ToListAsync();
                double rate = reviews.Sum(x=>x.Rate)/reviews.Count;
                var user = await DbContext.Users.FirstOrDefaultAsync(x=> x.Id == reviewCreate.PersonId);
                user.Rate = Math.Round(rate,1);
                DbContext.Update(user);
                await DbContext.SaveChangesAsync();

                return true;
            }
            catch (Exception ex)
            {
                Logger.LogError(ex, ex.Message);
                throw;
            }
        }

        public async Task<bool> DeleteReview(int id)
        {
            try
            {
                if (id == null)
                    throw new ArgumentNullException("Id can't be null");
                var review = await DbContext.Reviews.FirstOrDefaultAsync(x => x.Id == id);
                DbContext.Reviews.Remove(review);
                await DbContext.SaveChangesAsync();
                return true;
            }
            catch (Exception ex)
            {
                Logger.LogError(ex, ex.Message);
                throw;
            }
        }

        public async Task<IEnumerable<ReviewDto>> GetAllReviews()
        {
            try
            {

                var reviews = await DbContext.Reviews.Include(x => x.Author).Include(x => x.Person).ToListAsync();
                var reviewsDto = Mapper.Map<List<ReviewDto>>(reviews);
                return reviewsDto;
            }
            catch (Exception ex)
            {
                Logger.LogError(ex, ex.Message);
                throw;
            }
        }

        public IEnumerable<ReviewDto> GetUserReviews(int userId)
        {
            try
            {
                if (userId == null)
                    throw new ArgumentNullException("Id can't be null");
                var reviews = DbContext.Reviews.Include(x=>x.Author).Include(x=>x.Person).AsQueryable().Where(x=> x.PersonId == userId);
                var reviewsDto = Mapper.Map<List<ReviewDto>>(reviews);
                return reviewsDto;
            }
            catch (Exception ex)
            {
                Logger.LogError(ex, ex.Message);
                throw;
            }
        }
    }
}
