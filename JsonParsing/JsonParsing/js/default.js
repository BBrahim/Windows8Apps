// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232509
(function () {
    "use strict";

    WinJS.Binding.optimizeBindingReferences = true;

    var app = WinJS.Application;
    var activation = Windows.ApplicationModel.Activation;

    app.onactivated = function (args) {
        if (args.detail.kind === activation.ActivationKind.launch) {
            if (args.detail.previousExecutionState !== activation.ApplicationExecutionState.terminated) {
                // TODO: This application has been newly launched. Initialize
                // your application here.
            } else {
                // TODO: This application has been reactivated from suspension.
                // Restore application state here.
            }

            args.setPromise(WinJS.UI.processAll().then(function() {
               
                //build up the URL for the file added to the project
                var url = new Windows.Foundation.Uri("ms-appx:///zoo.json");

                //this will store the imported data
                var myNewAnimals = new Array();

                //invoke the static method which loads the file
                //and creates Animal objects from json data
                //THE METHOD RETURNS A PROMISE!!!
                Zoo.Animal.loadZoo(url).done(

                    function (result) {
                        myNewAnimals = result;

                        myNewAnimals.forEach(function (animal) {
                            console.log("Name: " + animal.getName() + ", Age: " + animal.getAge() + ", IsHungry: " + animal.isHungry() + ", Hours since Last feed: " + animal.getHoursSinceLastFeed());
                        });
                    },
                    function (error) {
                        var messDialog = new Windows.UI.Popups.MessageDialog(error);
                        messDialog.showAsync();
                    });

            }));
        }
    };

    app.oncheckpoint = function (args) {
        // TODO: This application is about to be suspended. Save any state
        // that needs to persist across suspensions here. You might use the
        // WinJS.Application.sessionState object, which is automatically
        // saved and restored across suspension. If you need to complete an
        // asynchronous operation before your application is suspended, call
        // args.setPromise().
    };

    app.start();
})();
