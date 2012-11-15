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
            args.setPromise(WinJS.UI.processAll().then(function () {
                var btnSayHello = document.getElementById("btnSayHello");
                btnSayHello.addEventListener("click", btnSayHelo_ClickHandler, false);

                var ratingControlDiv = document.getElementById("ratingControl");
                var ratingControl = ratingControlDiv.winControl;

                ratingControl.addEventListener("change", rating_ClickHandler, false);
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

    function btnSayHelo_ClickHandler(eventInfo) {
        var txtName = document.getElementById("txtName");
        if (txtName) {
            var userName = txtName.value;
            var divForGreeting = document.getElementById("divGreeting");
            if (divForGreeting) {
                divForGreeting.innerText = "Hello " + userName + " !!";
            }
        }
    }

    function rating_ClickHandler(eventInfo) {

        var divForRating = document.getElementById("rating");
        divForRating.innerText = eventInfo.detail.tentativeRating;

    }

    app.start();
})();
