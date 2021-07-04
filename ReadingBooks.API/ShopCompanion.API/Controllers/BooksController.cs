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
    public class BookController : ControllerBase
    {
        private readonly IBookService _bookService;

        public BookController(IBookService bookServices)
        {
            _bookService = bookServices;
        }

        [HttpPost]
        [Route("CreateBook")]
        public ActionResult<int> CreateBook(Book book)
        {
            var result = _bookService.CreateBook(book);
            return result;
        }

        [HttpGet]
        [Route("GetCategory")]
        public ActionResult<List<string>> GetCategory()
        {
            var result = _bookService.GetCategory();
            return result;
        }

        [HttpGet]
        [Route("GetBooksWaiting")]
        public ActionResult<List<Book>> GetBooksWaiting(string userUid)
        {
            var result = _bookService.GetBooksWaiting(userUid);
            return result;
        }

        [HttpGet]
        [Route("GetBooksInReading")]
        public ActionResult<List<Book>> GetBooksInReading(string userUid)
        {
            var result = _bookService.GetBooksInReading(userUid);
            return result;
        }

        [HttpGet]
        [Route("GetBooksCompleted")]
        public ActionResult<List<Book>> GetBooksCompleted(string userUid)
        {
            var result = _bookService.GetBooksCompleted(userUid);
            return result;
        }
    }
}
