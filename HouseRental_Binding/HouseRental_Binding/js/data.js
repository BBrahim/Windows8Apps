/// <reference path="//Microsoft.WinJS.0.6/js/base.js" /> 
/// <reference path="//Microsoft.WinJS.0.6/js/ui.js" /> 

(function () {
    "use strict";

    WinJS.Namespace.define("ViewModel.Data", {
        price1: "",
        price2: "",
        price3: "",
        price4: "",

        imageSource1: "",
        imageSource2: "",
        imageSource3: "",
        imageSource4: "",

        city1: "",
        city2: "",
        city3: "",
        city4: ""
    });

    //init prices
    ViewModel.Data.price1 = "650.000 $";
    ViewModel.Data.price2 = "890.000 $";
    ViewModel.Data.price3 = "380.000 $";
    ViewModel.Data.price4 = "740.000 $";

    //init image sources
    ViewModel.Data.imageSource1 = "/images/house1.jpg";
    ViewModel.Data.imageSource2 = "/images/house2.jpg";
    ViewModel.Data.imageSource3 = "/images/house3.jpg";
    ViewModel.Data.imageSource4 = "/images/house4.jpg";

    //init the cities
    ViewModel.Data.city1 = "New York";
    ViewModel.Data.city2 = "Los Angeles";
    ViewModel.Data.city3 = "Boston";
    ViewModel.Data.city4 = "San Francisco";

})();