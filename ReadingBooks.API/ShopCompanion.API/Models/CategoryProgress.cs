using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShopCompanion.API.Models
{
    public class CategoryProgress
    {
        public int Id { get; set; }
        public string UserId { get; set; }
        public string Category { get; set; }
        public int CategoryLevel { get; set; }
        public int XpLevel { get; set; }
        public int XpTotal { get; set; }

        CategoryProgress() { }

        CategoryProgress(int id, string userId, string category, int categoryLevel, int xpLevel, int xpTotal)
        {
            Id = id;
            UserId = userId;
            Category = category;
            CategoryLevel = categoryLevel;
            XpLevel = xpLevel;
            XpTotal = xpTotal;
        }
    }
}
