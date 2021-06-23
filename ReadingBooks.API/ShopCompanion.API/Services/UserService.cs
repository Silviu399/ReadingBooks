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
    public class UserService : IUserService
    {
        private readonly IConfiguration _configuration;

        public UserService(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public User GetUser(int id)
        {
            var sqlQuery = @$"SELECT * 
                            FROM Users
                            Where ID=('{ id }')";
            using (IDbConnection connection = new SqlConnection(_configuration.GetConnectionString("LocalDB")))
            {
                var numberOfRowAffected = connection.Query<User>(sqlQuery).ToList();
                return numberOfRowAffected[0];
            }
        }

        public int CreateUser(string userName)
        {
            var sqlQuery = @$"INSERT INTO Users
                            OUTPUT Inserted.ID
                            VALUES ('{ userName }', 'False')";
            using (IDbConnection connection = new SqlConnection(_configuration.GetConnectionString("LocalDB")))
            {
                var numberOfRowAffected = connection.Query<int>(sqlQuery).ToList();
                return numberOfRowAffected[0];
            }
        }
        public int UpdateUser(int id, string userName)
        {
            var sqlQuery = @$"UPDATE Users 
                            SET UserName = '{userName}'
                            WHERE Id = {id}";
            using (IDbConnection connection = new SqlConnection(_configuration.GetConnectionString("LocalDB")))
            {
                var numberOfRowAffected = connection.Execute(sqlQuery);
                return numberOfRowAffected;
            }
        }
    }
}
