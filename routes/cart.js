var express = require('express');
var router = express.Router();
var firebaseDb = require('../services/firebase_admin');
var firebase = require('../services/friebase');
var firebaseAuth = firebase.auth();

router.get('/', function(req, res){
  firebaseDb.ref('/product').once('value', function(snapshot){
    var productData = snapshot.val();
    console.log(productData);
    productData.shift();
    console.log(productData);    
    res.render('cart', { products: productData });
  });
});

router.post('/search', function(req, res){
  var search = req.body.search;
  console.log(search);
  res.redirect('/cart');
});

module.exports = router;