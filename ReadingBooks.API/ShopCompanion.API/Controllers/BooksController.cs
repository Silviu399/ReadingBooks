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
    }
}
