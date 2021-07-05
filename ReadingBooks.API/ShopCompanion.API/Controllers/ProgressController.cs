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
    public class ProgressController : ControllerBase
    {
        private readonly IProgressService _progressService;

        public ProgressController(IProgressService progressServices)
        {
            _progressService = progressServices;
        }

        [HttpGet]
        [Route("GetUserProgress")]
        public ActionResult<UserProgress> GetUserProgress(string userId)
        {
            var result = _progressService.GetUserProgress(userId);
            return result;
        }

        [HttpGet]
        [Route("GetCategoryProgress")]
        public ActionResult<List<CategoryProgress>> GetCategoryProgress(string userId)
        {
            var result = _progressService.GetCategoryProgress(userId);
            return result;
        }
    }
}
