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
                var appData = Windows.Storage.ApplicationData.current;
                var localSettings = appData.localSettings;

                document.getElementById("txtUserName").value = localSettings.values["userName"];
                document.getElementById("txtFirstName").value = localSettings.values["firstName"];
                document.getElementById("txtLastName").value = localSettings.values["lastName"];

            } else {
                // TODO: This application has been reactivated from suspension.
                // Restore application state here.
                var contactInfo = WinJS.Application.sessionState["ContactInfo"];
                if (contactInfo) {
                    document.getElementById("txtUserName").value = contactInfo.userName;
                    document.getElementById("txtFirstName").value = contactInfo.firstName;
                    document.getElementById("txtLastName").value = contactInfo.lastName;
                }

            }
            args.setPromise(WinJS.UI.processAll().then(function(){
                //assign eventListener to save button
                btnSaveData.addEventListener("click", saveData, false);
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
        var contactInfo = {
            userName: document.getElementById("txtUserName").value,
            firstName : document.getElementById("txtFirstName").value,
            lastName : document.getElementById("txtLastName").value
        };

        WinJS.Application.sessionState["ContactInfo"] = contactInfo;
    };

    app.start();

    function saveData() {
        var userName = document.getElementById("txtUserName").value;
        var firstName = document.getElementById("txtFirstName").value;
        var lastName = document.getElementById("txtLastName").value;

        //store the values in ApplicationData
        var appData = Windows.Storage.ApplicationData.current;
        var localSettings = appData.localSettings;
        localSettings.values["userName"] = userName;
        localSettings.values["firstName"] = firstName;
        localSettings.values["lastName"] = lastName;

        //update the ui saying that has been saved
        var lblToShowSaveMessage = document.getElementById("lblDataSaved");
        lblToShowSaveMessage.innerText = "The data has been successfully saved to the local storage";

    }

    

})();
