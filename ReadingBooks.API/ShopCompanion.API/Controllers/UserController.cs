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
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;

        public UserController(IUserService userServices)
        {
            _userService = userServices;
        }

        [HttpGet]
        [Route("GetUser")]
        public ActionResult<User> GetUser(int id)
        {
            var user = _userService.GetUser(id);
            return user;
        }

        [HttpPost]
        [Route("CreateUser")]
        public ActionResult<int> CreateUser(string userName)
        {
            var createdId = _userService.CreateUser(userName);
            return createdId;
        }

        [HttpPut]
        [Route("UpdateUser")]
        public ActionResult<int> UpdateUser(int id, string userName)
        {
            var numberOfRowAffected = _userService.UpdateUser(id, userName);
            return numberOfRowAffected;
        }
    }
}
