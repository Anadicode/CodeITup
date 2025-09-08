const express= require('express');

const error404= require('../controllers/ErrorController');

const Error=express.Router(); // activating router ability

Error.use(error404.error);



module.exports=Error; // singel export