using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShopCompanion.API.Models
{
    public class Rating
    {
        public double Average { get; set; }
        public int[] Stars { get; set; } = new int[5];
    }
}
