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
    public class ProductController : ControllerBase
    {
        private readonly IProductService _productService;

        public ProductController(IProductService productServices)
        {
            _productService = productServices;
        }

        [HttpPost]
        [Route("CreateProduct")]
        public ActionResult<Product> CreateProduct(string barcode, string barcodeType)
        {
            var newProduct = new Product(barcode, barcodeType);
            var prod = _productService.CreateProduct(newProduct);

            return prod;
        }

        [HttpPut]
        [Route("UpdateProduct")]
        public ActionResult<Product> UpdateProduct(Product product)
        {
            var prod = _productService.UpdateProduct(product);
            return prod;
        }

        [HttpGet]
        [Route("GetProducts")]
        public ActionResult<List<Product>> GetProducts()
        {
            var product = _productService.GetProducts();

            if (product.Count == 0)
            {
                return NotFound();
            }

            return product;
        }

        [HttpGet]
        [Route("GetProduct")]
        public ActionResult<Product> GetProduct(string barcode)
        {
            var product = _productService.GetProduct(barcode);

            if (product == null)
            {
                return NotFound();
            }

            return product;
        }
    }
}
