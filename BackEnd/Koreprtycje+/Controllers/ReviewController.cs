using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Model.DTO;
using Services.Interfaces;
using System.Security.Claims;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Koreprtycje_.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReviewController : ControllerBase
    {
        private readonly IReviewService _reviewService;
        private readonly IConfiguration _configuration;

        public ReviewController(IConfiguration configuration, IReviewService reviewService)
        {
            _configuration = configuration;
            _reviewService = reviewService;
        }
        [HttpGet, Authorize(Roles ="Administrator")]
        public async Task<ActionResult<IEnumerable<ReviewDto>>> GetAllReviews()
        {

            var reviews = await _reviewService.GetAllReviews();

            return Ok(reviews);
        }

        [HttpGet("{id}")]
        public IEnumerable<ReviewDto> GetUserReviews(int id)
        {
            if (id == null)
                throw new ArgumentNullException("Id cannot be null");

            var reviews = _reviewService.GetUserReviews(id);

            return reviews;
        }

        [HttpPost("AddReview"), Authorize(Roles ="User")]
        public async Task<ActionResult> AddReview(ReviewCreateDto reviewCreateDto)
        {
            reviewCreateDto.AuthorId = int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier));
            if (await _reviewService.AddReview(reviewCreateDto))
                return Ok();

            return BadRequest();
        }


        // DELETE api/<ReviewController>/5
        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteReview(int id)
        {
            if (await _reviewService.DeleteReview(id))
                return Ok("Review deleted");
            else
            {
                return BadRequest();
            }
        }
    }
}
