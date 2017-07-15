var Product= require('../models/product');
var mongoose = require('mongoose');
var url='mongodb://localhost:27017/shopping';
mongoose.connect(url);
var products=[
   new Product({
     imagePath:'https://us.sunpower.com/sites/sunpower/files/styles/background_image_small/public/p-series-p-17-invertedmedium_0.png?itok=-JApnvNa&timestamp=1474358416',
     title:'Gothic Video Game 2',
     description:'Awesome Game',
     price:10
   }),
   new Product({
     imagePath:'https://us.sunpower.com/sites/sunpower/files/styles/background_image_small/public/p-series-p-17-invertedmedium_0.png?itok=-JApnvNa&timestamp=1474358416',
     title:'Gothic Video Game 1',
     description:'Awesome Game',
     price:20
   }),
   new Product({
     imagePath:'https://us.sunpower.com/sites/sunpower/files/styles/background_image_small/public/p-series-p-17-invertedmedium_0.png?itok=-JApnvNa&timestamp=1474358416',
     title:'Gothic Video Game 3',
     description:'Awesome Game',
     price:30
   }),
   new Product({
     imagePath:'https://us.sunpower.com/sites/sunpower/files/styles/background_image_small/public/p-series-p-17-invertedmedium_0.png?itok=-JApnvNa&timestamp=1474358416',
     title:'Gothic Video Game 4',
     description:'Awesome Game',
     price:40
   }),
   new Product({
     imagePath:'https://us.sunpower.com/sites/sunpower/files/styles/background_image_small/public/p-series-p-17-invertedmedium_0.png?itok=-JApnvNa&timestamp=1474358416',
     title:'Gothic Video Game 5',
     description:'Awesome Game',
     price:50
   })
];
var done=0;
for (var i = 0; i < products.length; i++) {
 products[i].save(function(err, result){
   done++;
   if(done==products.length){
     exit();
   }
 });
}
function exit() {
 mongoose.disconnect();
}
