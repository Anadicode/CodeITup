const express= require('express');
const path = require('path');

const rootdir= require('../utils/pathUtils');

const hostRouts= express.Router();

const products=[];
const registration=[];


// handling products

hostRouts.get('/products',(req,res,next)=>{
    
   res.sendFile(path.join(rootdir,'views','products.html'));
});

hostRouts.post('/products',(req,res,next)=>{     
    console.log(req.body);
    products.push({productName:req.body.productName,Category:req.body.Category,Description:req.body.Description, Price:req.body.Price});
   //res.sendFile(path.join(rootdir,'views','main.html'));  //  sending static file as response
     res.render('main',{products});     
});


   // handling registered users

hostRouts.get('/register',(req,res,next)=>{
    
   res.sendFile(path.join(rootdir,'views','register.html'));
});

hostRouts.post('/register',(req,res,next)=>{
    
    console.log(req.body);

    registration.push({fullName:req.body.fullName,email:req.body.email,password:req.body.password, confirmPassword:req.body. confirmPassword});   
  // res.sendFile(path.join(rootdir,'views','main.html'));  //  sending static file as response

    res.render('registeredUser',{registration});
});


exports.hostRouts=hostRouts;
exports.products=products;
exports.registration=registration;