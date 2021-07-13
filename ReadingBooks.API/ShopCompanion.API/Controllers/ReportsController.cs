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
    public class ReportsController : ControllerBase
    {
        private readonly IReportsService _reportsService;

        public ReportsController(IReportsService reportsServices)
        {
            _reportsService = reportsServices;
        }

        [HttpGet]
        [Route("GetReadersByXP")]
        public ActionResult<List<ReadersByXP>> GetReadersByXP()
        {
            var result = _reportsService.GetReadersByXP();
            return result;
        }

        [HttpGet]
        [Route("GetReadersWithMostBooksFinished")]
        public ActionResult<List<ReadersWithMostBooksFinished>> GetReadersWithMostBooksFinished()
        {
            var result = _reportsService.GetReadersWithMostBooksFinished();
            return result;
        }

        [HttpGet]
        [Route("GetTopReadersPerCategory")]
        public ActionResult<List<TopReadersPerCategory>> GetTopReadersPerCategory()
        {
            var result = _reportsService.GetTopReadersPerCategory();
            return result;
        }

        [HttpGet]
        [Route("GetCategorysByNumberOfBooksFinalized")]
        public ActionResult<List<CategoryWithNumberOfBooksFinalized>> GetCategorysByNumberOfBooksFinalized()
        {
            var result = _reportsService.GetCategorysByNumberOfBooksFinalized();
            return result;
        }

        [HttpGet]
        [Route("GetBooksByNbPages")]
        public ActionResult<List<BooksWithNbPages>> GetBooksByNbPages()
        {
            var result = _reportsService.GetBooksByNbPages();
            return result;
        }
    }
}
