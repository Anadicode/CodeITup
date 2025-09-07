const express= require('express');
const path=require('path');

const rootdir=require('../utils/pathUtils');

const index= express.Router(); // activating the router

index.get('/',(req,res,next)=>{
      console.log('index page is here');
      res.sendFile(path.join(rootdir,'views','index.html'));
});


module.exports=index; // singel exports