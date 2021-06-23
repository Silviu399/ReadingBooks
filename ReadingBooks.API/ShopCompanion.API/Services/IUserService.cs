using ShopCompanion.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShopCompanion.API.Services
{
    public interface IUserService
    {
        User GetUser(int id);
        int CreateUser(string userName);
        int UpdateUser(int id, string userName);
     }
}
