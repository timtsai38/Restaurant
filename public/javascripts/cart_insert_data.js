var firebaseDb = require('../../services/firebase_admin');

var classicHamburgerPackage = {
    product_id:1,
    chinese_name:'經典漢堡套餐',
    english_name:'Classic Hamburger Package',
    price:120,
    tag:['不敗漢堡系列', '只愛吃薯條'],
    imgUrl:'https://firebasestorage.googleapis.com/v0/b/projectnodejs-10845.appspot.com/o/product_1.png?alt=media&token=c4c0f1d7-6b34-4979-b0fc-69b0c12fe972'
};

var handsomeSausage = {
    product_id:2,
    chinese_name:'英俊香腸',
    english_name:'Handsome Sausage',
    price:1024,
    tag:['不敗漢堡系列', '加熱就可食'],
    imgUrl:'https://firebasestorage.googleapis.com/v0/b/projectnodejs-10845.appspot.com/o/product_2.png?alt=media&token=917b440b-5d2d-443a-ab47-39d49cb0ab1a'
};

var hamburgerBrothers = {
    product_id:3,
    chinese_name:'漢堡兄弟',
    english_name:'Hamburger Brothers',
    price:792,
    tag:['不敗漢堡系列'],
    imgUrl:'https://firebasestorage.googleapis.com/v0/b/projectnodejs-10845.appspot.com/o/product_3.png?alt=media&token=b56f2c45-16ff-4c36-9039-9759a6b7dd80'
};

var dragonBallPackage = {
    product_id:4,
    chinese_name:'完美願望',
    english_name:'Dragon Ball Package',
    price:999999,
    tag:['不敗漢堡系列', '只愛吃薯條'],
    imgUrl:'https://firebasestorage.googleapis.com/v0/b/projectnodejs-10845.appspot.com/o/product_4.png?alt=media&token=ce0760a4-6d9e-4d49-90d5-bacba9d820bb'
};

var insertDatas = [classicHamburgerPackage, handsomeSausage, hamburgerBrothers, dragonBallPackage];

for(var item in insertDatas){
    console.log(insertDatas[item]);
    firebaseDb.ref('/product/' + insertDatas[item].product_id).set(insertDatas[item]);
}