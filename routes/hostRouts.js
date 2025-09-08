const express= require('express');
const path = require('path');

const rootdir= require('../utils/pathUtils');
const hostControlers= require('../controllers/hostControlers');
const hostRouts= express.Router();





// handling products

hostRouts.get('/products',hostControlers.getProducts);

hostRouts.post('/products',hostControlers.postProducts);


   // handling registered users

hostRouts.get('/register',hostControlers.getRegistration);

hostRouts.post('/register',hostControlers.postRegistration);


exports.hostRouts=hostRouts;

