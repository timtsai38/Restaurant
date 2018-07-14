var express = require('express');
var router = express.Router();
var firebaseDb = require('../services/firebase_admin');
var firebase = require('../services/friebase');
var firebaseAuth = firebase.auth();

router.get('/', function(req, res){
  res.render('index', { customerEmail: req.session.customerEmail });
});

router.post('/', function(req, res){
  var reservation = {
    name: req.body.name,
    phone: req.body.phone,
    mail: req.body.mail,
    numbers: req.body.numbers,
    vegetarian: req.body.vegetarian
  };
  console.log(reservation);
  firebaseDb.ref('/reservation').push(reservation);
  res.redirect('/');
});

module.exports = router;