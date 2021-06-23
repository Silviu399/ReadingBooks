using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ShopCompanion.API.Models;

namespace ShopCompanion.API.Services
{
    public interface IProductService
    {
        Product CreateProduct(Product product);
        Product UpdateProduct(Product product);
        List<Product> GetProducts();
        Product GetProduct(string barcode);
    }
}
