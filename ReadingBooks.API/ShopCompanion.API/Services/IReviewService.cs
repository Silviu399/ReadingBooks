using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ShopCompanion.API.Models;

namespace ShopCompanion.API.Services
{
    public interface IReviewService
    {
        int CreateOrUpdateReview(string barcode, Review review);
        int UpdateReview(Review review);
        int DeleteReview(int reviewId);
    }
}
