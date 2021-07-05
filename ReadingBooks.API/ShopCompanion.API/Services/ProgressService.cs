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
    public class ProgressService : IProgressService
    {
        private readonly IConfiguration _configuration;

        public ProgressService(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public UserProgress GetUserProgress(string userId)
        {
            var sqlQuery = @$"SELECT * FROM UserProgress WHERE UserId = '{userId}'";
            using (IDbConnection connection = new SqlConnection(_configuration.GetConnectionString("LocalDB")))
            {
                var results = connection.Query<UserProgress>(sqlQuery).ToList();
                return results[0];
            }
        }

        public List<CategoryProgress> GetCategoryProgress(string userId)
        {
            var sqlQuery = @$"SELECT * FROM CategoryProgress WHERE UserId = '{userId}'";
            using (IDbConnection connection = new SqlConnection(_configuration.GetConnectionString("LocalDB")))
            {
                var results = connection.Query<CategoryProgress>(sqlQuery).ToList();
                return results;
            }
        }
    }
}
