using Dapper;
using Microsoft.Extensions.Configuration;
using ShopCompanion.API.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace ShopCompanion.API.Services
{
    public class ReviewService : IReviewService
    {
        private readonly IConfiguration _configuration;

        public ReviewService(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        public int CreateOrUpdateReview(string barcode, Review review)
        {
            var insertQuery = @$"INSERT INTO Reviews 
                            VALUES (@userName, @stars, @text, { barcode }, @relevanceNumber, @date, @userId)";

            var searchQuery = $"SELECT * from Reviews WHERE UserId = '{ review.UserId }'";
            using (IDbConnection connection = new SqlConnection(_configuration.GetConnectionString("LocalDB")))
            {
                var output = connection.Query<Product>(searchQuery).ToList();
                int numberOfRowAffected;
                if (output.Count == 0)
                {
                    numberOfRowAffected = connection.Execute(insertQuery, review);
                }
                else
                {
                    numberOfRowAffected = UpdateReview(review);
                }

                return numberOfRowAffected;
            }
        }
        public int UpdateReview(Review review)
        {
            var sqlQuery = @$"UPDATE Reviews
                            SET Stars = '{review.Stars}', Text = '{review.Text}', Date = '{review.Date}', UserName = '{review.UserName}'
                            WHERE UserId = {review.UserId}";
            using (IDbConnection connection = new SqlConnection(_configuration.GetConnectionString("LocalDB")))
            {
                var numberOfRowAffected = connection.Execute(sqlQuery);
                return numberOfRowAffected;
            }
        }

        public int DeleteReview(int reviewId)
        {
            var sqlQuery = @$"DELETE FROM Reviews 
                            WHERE Id = {reviewId}";
            using (IDbConnection connection = new SqlConnection(_configuration.GetConnectionString("LocalDB")))
            {
                var numberOfRowAffected = connection.Execute(sqlQuery);
                return numberOfRowAffected;
            }
        }
    }
}
