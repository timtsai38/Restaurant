var admin = require("firebase-admin");

var serviceAccount = require("../projectnodejs-10845-firebase-adminsdk-blfs0-0dd13f794e.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://projectnodejs-10845.firebaseio.com"
});

var db = admin.database();

module.exports = db;