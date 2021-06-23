using ShopCompanion.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Data;
using System.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using Dapper;

namespace ShopCompanion.API.Services
{
    public class ProductService : IProductService
    {
        private readonly IConfiguration _configuration;

        public ProductService(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        public Product CreateProduct(Product product)
        {
            var sqlQuery = @"INSERT INTO Products 
                            VALUES (@barcode, @barcodeType, @name, @description, @views)";
            using (IDbConnection connection = new SqlConnection(_configuration.GetConnectionString("LocalDB")))
            {
                connection.Execute(sqlQuery, product);

                return product;
            }
        }

        public Product UpdateProduct(Product product)
        {
            var sqlQuery = @$"UPDATE Products 
                            SET Name = '{product.Name}', Description = '{product.Description}'
                            WHERE Barcode = {product.Barcode}";
            using (IDbConnection connection = new SqlConnection(_configuration.GetConnectionString("LocalDB")))
            {
                connection.Execute(sqlQuery, product);
                    
                return product; 
            }
        }

        public List<Product> GetProducts()
        {
            using (IDbConnection connection = new SqlConnection(_configuration.GetConnectionString("LocalDB")))
            {
                var output = connection.Query<Product>("SELECT * from Products").ToList();
                return output;
            }
        }

        public Product GetProduct(string barcode)
        {
            using (IDbConnection connection = new SqlConnection(_configuration.GetConnectionString("LocalDB")))
            {
                connection.Execute(@$"UPDATE Products SET Views = Views + 1 WHERE Barcode = '{barcode}'");
                var products = connection.Query<Product>($"SELECT * from Products WHERE Barcode = '{ barcode }'").ToList();
                if (products.Count == 0)
                    return null;

                products[0].Reviews = connection.Query<Review>($"SELECT * from Reviews where Barcode = '{ barcode }'").ToList();
                products[0].Reviews = products[0].Reviews.OrderByDescending(review => review.Stars).ToList();

                return products[0];
            }
        }
    }
}
