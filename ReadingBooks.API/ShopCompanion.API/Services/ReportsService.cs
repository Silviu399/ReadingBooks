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
    public class ReportsService : IReportsService
    {
        private readonly IConfiguration _configuration;

        public ReportsService(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public List<ReadersByXP> GetReadersByXP()
        {
            var sqlQuery = @$"SELECT Top 10 ROW_NUMBER() OVER(Order by (SELECT 1)) AS Position, UserName, UserLevel, XpTotal
                              FROM UserProgress
                              Order by XpTotal DESC";
            using (IDbConnection connection = new SqlConnection(_configuration.GetConnectionString("LocalDB")))
            {
                var result = connection.Query<ReadersByXP>(sqlQuery).ToList();
                return result;
            }
        }

        public List<ReadersWithMostBooksFinished> GetReadersWithMostBooksFinished()
        {
            var sqlQuery = @$"Select Top 10 ROW_NUMBER() OVER(Order by (SELECT 1)) AS Position, UserName, Count(Title) As BooksFinalized
                            From Books
                            WHERE NrPag = Progres
                            Group by UidUser, UserName
                            Order by BooksFinalized";
            using (IDbConnection connection = new SqlConnection(_configuration.GetConnectionString("LocalDB")))
            {
                var result = connection.Query<ReadersWithMostBooksFinished>(sqlQuery).ToList();
                return result;
            }
        }

        public List<CategoryWithNumberOfBooksFinalized> GetCategorysByNumberOfBooksFinalized()
        {
            var sqlQuery = @$"Select Top 10 ROW_NUMBER() OVER(Order by (SELECT 1)) AS Position, Categorii, COUNT(Categorii) AS BooksFinalized
                            From Books
                            WHERE NrPag = Progres
                            Group by Categorii
                            Order by BooksFinalized Desc";
            using (IDbConnection connection = new SqlConnection(_configuration.GetConnectionString("LocalDB")))
            {
                var result = connection.Query<CategoryWithNumberOfBooksFinalized>(sqlQuery).ToList();
                return result;
            }
        }

        public List<BooksWithNbPages> GetBooksByNbPages()
        {
            var sqlQuery = @$"Select Top 10 ROW_NUMBER() OVER(Order by (SELECT 1)) AS Position, Title, Categorii, NrPag
                            From Books
                            Order by NrPag Desc";
            using (IDbConnection connection = new SqlConnection(_configuration.GetConnectionString("LocalDB")))
            {
                var result = connection.Query<BooksWithNbPages>(sqlQuery).ToList();
                return result;
            }
        }
    }
}
