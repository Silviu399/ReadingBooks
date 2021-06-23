using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ShopCompanion.API.Models;
using ShopCompanion.API.Services;

namespace ShopCompanion.API.Controllers
{
    [Route("api")]
    [ApiController]
    public class ReviewController : ControllerBase
    {
        private readonly IReviewService _reviewService;

        public ReviewController(IReviewService reviewServices)
        {
            _reviewService = reviewServices;
        }

        [HttpPost]
        [Route("CreateReview")]
        public ActionResult<int> CreateReview(string barcode, Review review)
        {
            var numberOfRowAffected = _reviewService.CreateOrUpdateReview(barcode, review);
            return numberOfRowAffected;
        }

        [HttpPut]
        [Route("UpdateReview")]
        public ActionResult<int> UpdateReview(Review review)
        {
            var numberOfRowAffected = _reviewService.UpdateReview(review);
            return numberOfRowAffected;
        }

        [HttpDelete]
        [Route("DeleteReview")]
        public ActionResult<int> DeleteReview(int reviewId)
        {
            var numberOfRowAffected = _reviewService.DeleteReview(reviewId);
            return numberOfRowAffected;
        }
    }
}
