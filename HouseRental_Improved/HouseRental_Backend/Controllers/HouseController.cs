using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace HouseRental_Backend.Controllers
{
    public class HouseController : ApiController
    {
        private static List<Models.House> houses = new List<Models.House>();

        static HouseController()
        {
            GenerateRandomData();
        }

        [HttpGet]
        public dynamic GetHouses()
        {
            return houses.ToArray();
        }
        
        private static void GenerateRandomData()
        {
            #region startup data

            var cities = new List<string>()
            {
                "New York",
                "Boston",
                "Chicago",
                "Detroit",
                "Los Angeles",
                "Texas",
                "Houston",
                "Washington",
                "Dallas",
                "San Francisco"
            };

            var addresses = new List<string>()
            {
                "Sunshine av. 128",
                "ClearSky 43B",
                "SouthBeach 785C",
                "NearRoad 1",
                "17th street 25",
                "YourHeavenWay 88",
                "Lion street 55",
                "Eucaliptus av 187",
                "1st street 987",
                "Jam Way 45"
            };

            var imageNames = new List<string>()
            {
                "/images/house1.jpg",
                "/images/house2.jpg",
                "/images/house3.jpg",
                "/images/house4.jpg",
                "/images/house5.jpg",
                "/images/house6.jpg",
                "/images/house7.jpg",
                "/images/house8.jpg",
                "/images/house9.jpg",
                "/images/house10.jpg"
            };

            var sizes = new List<decimal>()
            {
                204.66m,
                125.67m,
                130.00m,
                227.87m,
                2533.77m,
                52m,
                290.04m,
                554.54m,
                1024.32m,
                22.7m
            };

           

            var prices = new List<decimal>()
            {
                540000,
                678000,
                450000,
                125000,
                98700,
                9878500,
                120000,
                67000,
                370000,
                880000
            };

            #endregion startup data

            Random rnd = new Random();

            int nrOfElements = rnd.Next() % 300;

            for (int cursor = 0; cursor < nrOfElements; ++cursor)
            {
                houses.Add(new Models.House()
                {
                    City = cities[rnd.Next() % 10],
                    Size = sizes[rnd.Next() % 10],
                    Address = addresses[rnd.Next() % 10],
                    Price = prices[rnd.Next() % 10],
                    ImageSource = imageNames[rnd.Next() % 10]
                });
            }
       }
    }
}
