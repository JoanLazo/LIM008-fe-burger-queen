// Initialize Firebase
// Firebase App is always required and must be first
const firebase = require("firebase/app");
// Required for side-effects
require("firebase/firestore");

export const init = () => {
 const config = {
    apiKey: "AIzaSyCjxok38nQggyPiI3U0hiAuuMybHu6TpDM",
    authDomain: "burger-queen-db58c.firebaseapp.com",
    databaseURL: "https://burger-queen-db58c.firebaseio.com",
    projectId: "burger-queen-db58c",
    storageBucket: "burger-queen-db58c.appspot.com",
    messagingSenderId: "390496930817"
  };
  firebase.initializeApp(config);

  firebase.firestore().enablePersistence()
  .then(function() {
      // Initialize Cloud Firestore through firebase
      const db = firebase.firestore();
  })
  .catch(function(err) {
      if (err.code === 'failed-precondition') {
          // Multiple tabs open, persistence can only be enabled
          // in one tab at a a time.
          // ...
      } else if (err.code === 'unimplemented') {
          // The current browser does not support all of the
          // features required to enable persistence
          // ...
      }
  });
}