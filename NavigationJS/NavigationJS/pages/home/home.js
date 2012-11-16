(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/home/home.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            // TODO: Initialize the page here.

            var buttonHello = document.getElementById("btnHello");
            buttonHello.addEventListener("click", this.buttonClickHandler, false);

            var ratingDiv = document.getElementById("ratingControl");
            var ratingControl = ratingDiv.winControl;
            if (ratingControl) {
                ratingControl.addEventListener("change", this.ratingChanged, false);
            }

            //restore data
            var localSettings = Windows.Storage.ApplicationData.current.localSettings;
            if (localSettings) {
                var userName = localSettings.values["userName"];
                document.getElementById("txtName").value = userName;
                var greetingRating = localSettings.values["greetingRating"];
                document.getElementById("ratingOutput").innerText = greetingRating;
            }
        },

        buttonClickHandler: function (eventInfo) {
            var userName = document.getElementById("txtName").value;
            var greetingMessage = "Welcome " + userName + " !!!";
            document.getElementById("divGreeting").innerText = greetingMessage;

            //save the data to the session
            Windows.Storage.ApplicationData.current.localSettings.values["greetingInput"] = greetingMessage;
            Windows.Storage.ApplicationData.current.localSettings.values["userName"] = userName;
        },

        ratingChanged: function (evenInfo) {
            var newGreetingValue = evenInfo.detail.tentativeRating;
            document.getElementById("ratingOutput").innerText = newGreetingValue;

            //store data to session
            var appData = Windows.Storage.ApplicationData.current;
            var localSettings = appData.localSettings;

            localSettings.values["greetingRating"] = newGreetingValue;

        }
    });
})();
