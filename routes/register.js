var express = require('express');
var router = express.Router();
var firebaseDb = require('../services/firebase_admin');
var firebase = require('../services/friebase');
var firebaseAuth = firebase.auth();

router.get('/', function(req, res){
  res.render('register', { 
    error: req.flash('registerError'),
    success: req.flash('registerSuccess')
  });    
});

router.post('/', function(req, res){
  var email = req.body.emailAddress;
  var password = req.body.password;
  var confirmPassword = req.body.confirmPassword;
  if(password !== confirmPassword){
    var errorMessage = '密碼重新確認有誤!';
    req.flash('registerError', errorMessage);
    res.redirect('/register');    
  }else{
    firebaseAuth.createUserWithEmailAndPassword(email, password).then(function(customer){
      console.log(customer);
      var customerId = customer.user.uid;
      console.log(customerId);
      var customerData = {
        email: email,
        password: password
      };
      firebaseDb.ref('/customer/' + customerId).set(customerData);
      req.flash('registerSuccess', '註冊成功!');      
      res.redirect('/register');
    }).catch(function(error){
      console.log(error);
      var errorMessage = error.message;
      req.flash('registerError', errorMessage);
      res.redirect('/register');
    });
  }
}); 

module.exports = router;