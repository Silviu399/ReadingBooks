using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShopCompanion.API.Models
{
    public class UserProgress
    {
        public string UserId { get; set; }
        public int UserLevel { get; set; }
        public int XpLevel { get; set; }
        public int XpTotal { get; set; }

        UserProgress() { }

        UserProgress(string userId, int userLevel, int xpLevel, int xpTotal)
        {
            UserId = userId;
            UserLevel = userLevel;
            XpLevel = xpLevel;
            XpTotal = xpTotal;
        }
    }
}
