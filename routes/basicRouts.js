const express= require('express');
const path = require('path');

// local module
const rootdir= require('../utils/pathUtils');
const {registration}=require('./hostRouts');
const {products}=require('./hostRouts');

const basicRouts= express.Router();

basicRouts.get('/main',(req,res,next)=>{
  // res.sendFile(path.join(rootdir,'views','main.html'));
  res.render('main',{products});
});


basicRouts.get('/regiterUser',(req,res,next)=>{
  // res.sendFile(path.join(rootdir,'views','main.html'));
  res.render('registeredUser',{registration});
});



basicRouts.get('/about',(req,res,next)=>{
   res.sendFile(path.join(rootdir,'views','about.html'));
});


module.exports=basicRouts;