var firebase = require('firebase');
var config = {
    apiKey: "AIzaSyBrNP2v6z9hQvZ1mmxKx-lJkIb65oenblA",
    authDomain: "projectnodejs-10845.firebaseapp.com",
    databaseURL: "https://projectnodejs-10845.firebaseio.com",
    projectId: "projectnodejs-10845",
    storageBucket: "projectnodejs-10845.appspot.com",
    messagingSenderId: "252940750868"
};

firebase.initializeApp(config);

module.exports = firebase;