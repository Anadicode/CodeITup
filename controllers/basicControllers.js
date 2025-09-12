const path = require('path');

// local module
const rootdir= require('../utils/pathUtils');


const {Product}=require('../models/productModels');//importing product class from modles
const {Registration} =require('../models/ragisteModels');

//const {registration}=require('./hostControlers');
//const {products}=require('./hostControlers');

exports.main=(req,res,next)=>{
  // res.sendFile(path.join(rootdir,'views','main.html'));
const hostProducts=Product.fetchAll();
  res.render('main',{hostProducts});
};

exports.registeredUser=(req,res,next)=>{
  // res.sendFile(path.join(rootdir,'views','main.html'));
  const registration = Registration.fetchAll();
  res.render('registeredUser',{registration});
};


exports.about=(req,res,next)=>{
   res.sendFile(path.join(rootdir,'views','about.html'));
};