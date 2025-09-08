const path = require('path');

// local module
const rootdir= require('../utils/pathUtils');


const {registration}=require('./hostControlers');
const {products}=require('./hostControlers');

exports.main=(req,res,next)=>{
  // res.sendFile(path.join(rootdir,'views','main.html'));
  res.render('main',{products});
};

exports.registeredUser=(req,res,next)=>{
  // res.sendFile(path.join(rootdir,'views','main.html'));
  res.render('registeredUser',{registration});
};


exports.about=(req,res,next)=>{
   res.sendFile(path.join(rootdir,'views','about.html'));
};