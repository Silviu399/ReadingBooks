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
    public class BookService : IBookService
    {
        private readonly IConfiguration _configuration;

        public BookService(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public int CreateBook(Book book)
        {
            var sqlQuery = @$"INSERT INTO Books
                            VALUES (@uiduser, @title, @autor, @categorii, @nrPag, @progres)";
            using (IDbConnection connection = new SqlConnection(_configuration.GetConnectionString("LocalDB")))
            {
                var numberOfRowAffected = connection.Execute(sqlQuery, book);
                return numberOfRowAffected;
            }
        }

        public List<string> GetCategory()
        {
            var sqlQuery = @$"SELECT Categorie FROM Categorii";
            using (IDbConnection connection = new SqlConnection(_configuration.GetConnectionString("LocalDB")))
            {
                var numberOfRowAffected = connection.Query<string>(sqlQuery).ToList();
                return numberOfRowAffected;
            }
        }
    }
}
