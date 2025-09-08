const path=require('path');

const rootdir=require('../utils/pathUtils');

const products=[];
const registration=[];

           //products 
exports.getProducts=(req,res,next)=>{
  res.sendFile(path.join(rootdir,'views','products.html'));
 };

exports.postProducts=(req,res,next)=>{     
    console.log(req.body);
    products.push({productName:req.body.productName,Category:req.body.Category,Description:req.body.Description, Price:req.body.Price});
    //res.sendFile(path.join(rootdir,'views','main.html'));  //  sending static file as response
     res.render('main',{products});     
};

        //registration
exports.getRegistration = (req,res,next)=>{
    res.sendFile(path.join(rootdir,'views','register.html'));
};


 exports.postRegistration=(req,res,next)=>{
    
    console.log(req.body);
    registration.push({fullName:req.body.fullName,email:req.body.email,password:req.body.password, confirmPassword:req.body. confirmPassword});   
  // res.sendFile(path.join(rootdir,'views','main.html'));  //  sending static file as response

    res.render('registeredUser',{registration});
}


exports.products=products;
exports.registration= registration;