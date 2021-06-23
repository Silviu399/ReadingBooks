using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShopCompanion.API.Models
{
    public class Review
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public string UserName { get; set; }
        public int Stars { get; set; }
        public string Text { get; set; }
        public int RelevanceNumber { get; set; }
        public string Date { get; set; }
    }
}
