var express = require('express');
var router = express.Router();
var firebaseDb = require('../services/firebase_admin');
var firebase = require('../services/friebase');
var firebaseAuth = firebase.auth();


router.get('/', function(req, res){
  res.render('login', { title: 'login' });
});

router.post('/', function(req, res){
  var email = req.body.emailAddress;
  var password = req.body.password;
  firebaseAuth.signInWithEmailAndPassword(email, password).then(function(customer){
    console.log(customer);
    console.log('Login success!');
    console.log(customer.user.uid);
    req.session.customerId = customer.user.uid;
    firebaseDb.ref('/customer/' +　customer.user.uid).once('value', function(snapshot){
      var customerData = snapshot.val();
      console.log(customerData);
      req.session.customerEmail = customerData.email;
      res.redirect('/');
    });
  }).catch(function(error){
    console.log(error);
    console.log('Login fail!');
  });
});

module.exports = router;