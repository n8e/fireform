// Initialize Firebase
var config = {
  apiKey: "AIzaSyAYxcqK3pJIwSyhg4ZRqhOVYur5SHM2iiI",
  authDomain: "fireform-e1f9a.firebaseapp.com",
  databaseURL: "https://fireform-e1f9a.firebaseio.com",
  storageBucket: "fireform-e1f9a.appspot.com",
};

firebase.initializeApp(config);

/*
* firebase auth providers(the apps need to have been created, the api keys and
* secrets need to be added on the firebase auth tab when enabling the different
* providers)
*/

var googProvider = new firebase.auth.GoogleAuthProvider();
var fbProvider = new firebase.auth.FacebookAuthProvider();
var twitProvider = new firebase.auth.TwitterAuthProvider();

googProvider.addScope('https://www.googleapis.com/auth/plus.login');

/*
* google login method
*/

function googLogin() {
  firebase.auth().signInWithRedirect(googProvider);
  firebase.auth().getRedirectResult().then(function(result) {
    if (result.credential) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // ...
    }
    // The signed-in user info.
    var user = result.user;
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
}
/*
* facebook login method
*/

function fbLogin() {
  firebase.auth().signInWithRedirect(fbProvider);
  firebase.auth().getRedirectResult().then(function(result) {
    if (result.credential) {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      var token = result.credential.accessToken;
      // ...
    }
    // The signed-in user info.
    var user = result.user;
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
}

/*
* Twitter login method
*/

function twitLogin() {
  firebase.auth().signInWithRedirect(twitProvider);
  firebase.auth().getRedirectResult().then(function(result) {
    if (result.credential) {
      // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
      // You can use these server side with your app's credentials to access the Twitter API.
      var token = result.credential.accessToken;
      var secret = result.credential.secret;
      // ...
    }
    // The signed-in user info.
    var user = result.user;
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
}

/*
* sign out method
*/

function logout() {
  firebase.auth().signOut().then(function() {
    // Sign-out successful.
  }, function(error) {
    // An error happened.
  });
}

/*
* cookie methods
*/

(function ReadCookie() {
  var allKeys = [];
  for (var key in localStorage){
   allKeys.push(key)
}

  if (allKeys.length < 1) {
    document.getElementById('bar').style.display = 'block';
    document.getElementById('foo').style.display = 'none';
  } else {
    for (var key in localStorage){
      if (key.indexOf('firebase:authUser') !== -1) {
        document.getElementById('bar').style.display = 'none';
        document.getElementById('foo').style.display = 'block';
      } else {
        document.getElementById('bar').style.display = 'block';
        document.getElementById('foo').style.display = 'none';
      }
    }
  }
})()
