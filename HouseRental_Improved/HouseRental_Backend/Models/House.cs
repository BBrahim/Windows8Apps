using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HouseRental_Backend.Models
{
    public class House
    {
        public House()
        {

        }

        public string City { get; set; }
        public decimal Price { get; set; }
        public decimal Size { get; set; }
        public string Address { get; set; }
        public string ImageSource { get; set; }
    }
}