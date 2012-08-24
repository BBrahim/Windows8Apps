/// <reference path="//Microsoft.WinJS.1.0/js/base.js" />
/// <reference path="//Microsoft.WinJS.1.0/js/ui.js" />

//reference my js files for entities 
/// <reference path="house.js" />

(function () {
    "use strict";

    WinJS.Namespace.define("HouseRental", {
        ViewModel: function () {
            var that = this;

            //declare an observable collection
            //this will store the HouseRental.Entities.House objects
            var _houses = new WinJS.Binding.List();

            //return an observable object
            return WinJS.Binding.as({

                //this property will be used in bindings
                data: _houses,

                addHouse: function (house) {
                    _houses.push(house);
                }
            });
        }
    });

    //this will help to build up the VM and load data
    WinJS.Namespace.define("HouseRental", {
        ApplicationData: WinJS.Binding.as((function () {
            var vm = new HouseRental.ViewModel();

            //get the data from the WEB API application
            WinJS.xhr({ url: "http://localhost:1053/api/house/GetHouses" })
                 .done(function (result) {

                     var jsonHouses = JSON.parse(result.response);

                     if (jsonHouses) {
                         for (var i = 0; i < jsonHouses.length; ++i) {
                             var newHouse = new HouseRental.Entities.House(jsonHouses[i]);
                             vm.addHouse(newHouse);
                         }
                     }
                 });

            return vm;
        })())
    });




})();


