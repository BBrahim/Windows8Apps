/// <reference path="//Microsoft.WinJS.1.0/js/base.js" /> 
/// <reference path="//Microsoft.WinJS.1.0/js/ui.js" /> 


(function () {
    "use strict";

    WinJS.Namespace.define("Zoo", {
        Animal: WinJS.Class.define(

            //constructor
            function () {
                this._name = "";
                this._age = "";
                this._isHungry = false;
                this._hoursSinceLastFeed = 0;
            },

            //methods
            {
                getName: function () { return this._name; },
                setName: function (newValue) { this._name = newValue; },

                getAge: function () { return this._age; },
                setAge: function (newValue) { this._age = newValue; },

                isHungry: function () { return this._isHungry; },

                getHoursSinceLastFeed: function () { return this._hoursSinceLastFeed; },
                setHoursSinceLastFeed: function (newValue) {
                    this._hoursSinceLastFeed = newValue;

                    if (newValue > 4) {
                        this._isHungry = true;
                    }
                    else {
                        this._isHungry = false;
                    }
                },
            },

            //static methods
            {
                buildAnimal: function (model) {

                    var newAnimal = new Zoo.Animal();
                    if (model.hasOwnProperty("name")) {
                        newAnimal.setName(model.name);
                    }

                    if (model.hasOwnProperty("age")) {
                        newAnimal.setAge(model.age);
                    }

                    if (model.hasOwnProperty("hoursSinceLastFeed")) {
                        newAnimal.setHoursSinceLastFeed(model.hoursSinceLastFeed);
                    }

                    return new WinJS.Binding.as(newAnimal);
                },

                loadZoo: function (uri) {
                    //IMPORTANT TO RETURN THE PROMISE
                    return Windows.Storage.StorageFile.getFileFromApplicationUriAsync(uri).then(
                         function (file) {

                             return Windows.Storage.FileIO.readTextAsync(file).then(
                                 function (textFromFile) {
                                     var myParsedJsonData = JSON.parse(textFromFile);

                                     //this will store all the new animals added to zoo
                                     var zoo = new Array();

                                     if (myParsedJsonData) {

                                         myParsedJsonData.forEach(function (newObject) {
                                             var newAnimal = Zoo.Animal.buildAnimal(newObject);
                                             zoo.push(newAnimal);
                                         });
                                     }
                                     return zoo;
                                 });
                         });
                }
            })//end  WinJS.Class.define
    });
})();