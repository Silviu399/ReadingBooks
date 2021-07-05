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

        public List<Book> GetBooksWaiting(string userUid)
        {
            var sqlQuery = @$"SELECT * FROM Books WHERE UidUser = '{userUid}' And Progres=0";
            using (IDbConnection connection = new SqlConnection(_configuration.GetConnectionString("LocalDB")))
            {
                var books = connection.Query<Book>(sqlQuery).ToList();
                return books;
            }
        }

        public List<Book> GetBooksInReading(string userUid)
        {
            var sqlQuery = @$"SELECT * FROM Books WHERE UidUser = '{userUid}' AND Progres!=0 AND NrPag != Progres";
            using (IDbConnection connection = new SqlConnection(_configuration.GetConnectionString("LocalDB")))
            {
                var books = connection.Query<Book>(sqlQuery).ToList();
                return books;
            }
        }

        public List<Book> GetBooksCompleted(string userUid)
        {
            var sqlQuery = @$"SELECT * FROM Books WHERE UidUser = '{userUid}' AND NrPag = Progres";
            using (IDbConnection connection = new SqlConnection(_configuration.GetConnectionString("LocalDB")))
            {
                var books = connection.Query<Book>(sqlQuery).ToList();
                return books;
            }
        }

        public int UpdateBook(Book book)
        {
            var sqlQuery = @$"UPDATE Books 
                            SET Progres = {book.Progres}
                            WHERE ID = {book.Id} AND UidUser = '{book.UidUser}'";
            using (IDbConnection connection = new SqlConnection(_configuration.GetConnectionString("LocalDB")))
            {
                var numberOfRowAffected = connection.Execute(sqlQuery);
                return numberOfRowAffected;
            }
        }
    }
}
