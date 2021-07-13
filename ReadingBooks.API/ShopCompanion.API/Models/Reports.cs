using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShopCompanion.API.Models
{
    public class ReadersByXP
    {
        public int Position { get; set; }
        public string UserName { get; set; }
        public int UserLevel { get; set; }
        public int XPTotal { get; set; }
    }

    public class ReadersWithMostBooksFinished
    {
        public int Position { get; set; }
        public string UserName { get; set; }
        public int BooksFinalized { get; set; }
    }

    public class TopReadersPerCategory
    {
        public int Position { get; set; }
        public string UserName { get; set; }
        public string Category { get; set; }
        public int XPTotal { get; set; }
    }

    public class CategoryWithNumberOfBooksFinalized
    {
        public int Position { get; set; }
        public string Categorii { get; set; }
        public int BooksFinalized { get; set; }
    }

    public class BooksWithNbPages
    {
        public int Position { get; set; }
        public string Title { get; set; }
        public string Categorii { get; set; }
        public int NrPag { get; set; }
    }
}
