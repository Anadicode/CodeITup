const express= require('express');
const path=require('path');
const rootdir=require('../utils/pathUtils');


const Error=express.Router(); // activating router ability

Error.use((req,res,next)=>{

    console.log('page not found');
  res.status(404).sendFile(path.join(rootdir,'views','Error.html'));
});



module.exports=Error; // singel export