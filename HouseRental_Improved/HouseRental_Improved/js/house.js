/// <reference path="//Microsoft.WinJS.1.0/js/base.js" />
/// <reference path="//Microsoft.WinJS.1.0/js/ui.js" />

(function () {
    "use strict";

    WinJS.Namespace.define("HouseRental.Entities", {
        House: function (model) {
            var that = this;

            var _City = "";
            var _Size= 0.0;
            var _Address= "";
            var _Price = 0.0;
            var _NrOfBathrooms = 0;
            var _ImageSource = "";

            if (model != null || model != undefined) {
                _City = model.City;
                _Size = model.Size;
                _Address = model.Address;
                _Price = model.Price;
                _NrOfBathrooms = model.NrOfBathrooms;
                _ImageSource = model.ImageSource;
            }

            //return an object which has observable properties
            return WinJS.Binding.as({
                City: _City,
                Size: _Size,
                Address: _Address,
                Price: _Price,
                NrOfBathrooms: _NrOfBathrooms,
                ImageSource : _ImageSource,
                Info: _City + " - " + _Address
            });
        }
    });

})();