using ShopCompanion.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShopCompanion.API.Services
{
    public interface IReportsService
    {
        List<ReadersByXP> GetReadersByXP();
        List<ReadersWithMostBooksFinished> GetReadersWithMostBooksFinished();
        List<TopReadersPerCategory> GetTopReadersPerCategory();
        List<CategoryWithNumberOfBooksFinalized> GetCategorysByNumberOfBooksFinalized();
        List<BooksWithNbPages> GetBooksByNbPages();
    }
}
