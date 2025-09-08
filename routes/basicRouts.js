const express= require('express');
const path = require('path');

// local module
const rootdir= require('../utils/pathUtils');

const basicControler=require('../controllers/basicControllers');



const basicRouts= express.Router();

basicRouts.get('/main',basicControler.main);



basicRouts.get('/regiterUser',basicControler.registeredUser);



basicRouts.get('/about',basicControler.about);


module.exports=basicRouts;