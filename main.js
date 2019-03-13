   // Initialize Firebase
        // TODO: Replace with your project's customized code snippet
        var config = {
            apiKey: "",
            authDomain: "",
            databaseURL: "",
            projectId: "",
            storageBucket: "",
            messagingSenderId: ""
        };
        firebase.initializeApp(config);
      
        var messaging = firebase.messaging();
        messaging.requestPermission().then(function () {
            console.log('Notification permission granted.');
            getregistertoken();
            // TODO(developer): Retrieve an Instance ID token for use with FCM.
            // ...
        }).catch(function (err) {
            console.log('Unable to get permission to notify.', err);
        });
        function getregistertoken() {
            // Get Instance ID token. Initially this makes a network call, once retrieved
            // subsequent calls to getToken will return from cache.
            messaging.getToken().then(function (currentToken) {
                if (currentToken) {
                    console.log(currentToken);
                    // sendTokenToServer(currentToken);
                    // updateUIForPushEnabled(currentToken);
                } else {
                    // Show permission request.
                    console.log('No Instance ID token available. Request permission to generate one.');
                    // Show permission UI.
                    //  updateUIForPushPermissionRequired();
                    // setTokenSentToServer(false);
                }
            }).catch(function (err) {
                console.log('An error occurred while retrieving token. ', err);
                // showToken('Error retrieving Instance ID token. ', err);
                //setTokenSentToServer(false);
            });
        };
          var database = firebase.database().ref().child("-L_kqUmVZCbRg-vhrQC3");
        database.on('value', function (snapshot) {
            console.log(snapshot.val())
        });
