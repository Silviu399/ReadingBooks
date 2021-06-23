using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShopCompanion.API.Models
{
    public class Product
    {
        public string Barcode { get; set; }
        public string BarcodeType { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int Views { get; set; }
        public List<Review> Reviews { get; set; }  = new List<Review>();
        public Rating Rating
        {
            get
            {
                var rating = new Rating();

                if(Reviews.Count != 0)
                {
                    int sum = 0;
                    int[] stars = new int[5];
                    foreach (var review in Reviews)
                    {
                        sum += review.Stars;
                        rating.Stars[review.Stars - 1]++;
                    }

                    rating.Average = Math.Round((double)sum / Reviews.Count, 1);
                    for (int i = 0; i < 5; i++)
                    {
                        rating.Stars[i] = rating.Stars[i] * 100 / Reviews.Count;
                    }
                }

                return rating;
            }
        }

        public Product() { }

        public Product(string barcode, string barcodeType) {
            Barcode = barcode;
            BarcodeType = barcodeType;
        }

        public Product(string barcode, string barcodeType, string name, string description)
        {
            Barcode = barcode;
            BarcodeType = barcodeType;
            Name = name;
            Description = description;
        }
    }
}
