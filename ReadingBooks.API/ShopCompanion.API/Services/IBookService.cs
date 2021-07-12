using ShopCompanion.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShopCompanion.API.Services
{
    public interface IBookService
    {
        int CreateBook(Book book);
        List<string> GetCategory();
        List<Book> GetBooksWaiting(string userUid);
        List<Book> GetBooksInReading(string userUid);
        List<Book> GetBooksCompleted(string userUid);
        int UpdateBook(Book book, int numberPages, string userName);
    }
}
