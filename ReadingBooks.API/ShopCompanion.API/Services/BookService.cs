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

        public int UpdateBook(Book book, int numberPages, string userName)
        {
            var sqlQueryUserProgress = @$"
BEGIN
	IF NOT EXISTS(SELECT * FROM UserProgress WHERE UserId = '{book.UidUser}')
	BEGIN
		INSERT INTO UserProgress
		VALUES ('{book.UidUser}', 1, 0, 0, '{userName}') 
	END

    UPDATE UserProgress 
	SET XPLevel += {numberPages}, XpTotal += {numberPages}
	WHERE UserId = '{book.UidUser}'

	IF EXISTS(SELECT * FROM UserProgress WHERE UserId = '{book.UidUser}' AND UserLevel*25<XpLevel)
	BEGIN
	   UPDATE UserProgress 
		SET XPLevel -= UserLevel*25, UserLevel+= 1
		WHERE UserId = '{book.UidUser}'
	END

    IF NOT EXISTS(SELECT * FROM CategoryProgress WHERE UserId = '{book.UidUser}' AND Category = '{book.Categorii}')
	BEGIN
		INSERT INTO CategoryProgress
		VALUES ('{book.UidUser}', '{book.Categorii}', 1, 0, 0, '{userName}') 
	END

    UPDATE CategoryProgress 
	SET XPLevel += {numberPages}, XpTotal += {numberPages}
	WHERE UserId = '{book.UidUser}' AND Category='{book.Categorii}'

	IF EXISTS(SELECT * FROM CategoryProgress WHERE UserId = '{book.UidUser}' AND Category='{book.Categorii}' AND CategoryLevel*25<XpLevel)
	BEGIN
	   UPDATE CategoryProgress 
		SET XPLevel -= CategoryLevel*25, CategoryLevel+= 1
		WHERE UserId = '{book.UidUser}' AND Category='{book.Categorii}'
	END
END";


            var sqlQueryUpdateBook = @$"UPDATE Books 
                            SET Progres = {book.Progres}
                            WHERE ID = {book.Id} AND UidUser = '{book.UidUser}'";
            using (IDbConnection connection = new SqlConnection(_configuration.GetConnectionString("LocalDB")))
            {
                var numberOfRowAffected = 0;

                numberOfRowAffected += connection.Execute(sqlQueryUserProgress);

                numberOfRowAffected += connection.Execute(sqlQueryUpdateBook);
                return numberOfRowAffected;
            }
        }
    }
}
