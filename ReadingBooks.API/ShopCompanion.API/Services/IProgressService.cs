using ShopCompanion.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShopCompanion.API.Services
{
    public interface IProgressService
    {
        UserProgress GetUserProgress(string userId);
        List<CategoryProgress> GetCategoryProgress(string userId);
    }
}
