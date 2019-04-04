import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// Initialize Firebase
var config = {
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
      firebase.firestore();
  })
  .catch(function(err) {
      if (err.code == 'failed-precondition') {
          // Multiple tabs open, persistence can only be enabled
          // in one tab at a a time.
          // ...
      } else if (err.code == 'unimplemented') {
          // The current browser does not support all of the
          // features required to enable persistence
          // ...
      }
  });
