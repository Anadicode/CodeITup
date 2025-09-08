const express= require('express');
const path=require('path');

const rootdir=require('../utils/pathUtils');
const {getIndex}= require('../controllers/indexControl');

const index= express.Router(); // activating the router

index.get('/',getIndex);


module.exports=index; // singel exports