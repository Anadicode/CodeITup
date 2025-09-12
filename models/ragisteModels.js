const registration=[];

const fs = require('fs');
const path = require('path');

const rootDir = require('../utils/pathUtils');

exports.Registration = class register{
    constructor(fullName,email,password,confirmPassword){
         this .fullName=fullName;
         this .email=email;
         this .password=password;
         this . confirmPassword= confirmPassword
    }

    save(){
        registration.push(this);
         const filePath=path.join(rootDir,'Data','register.json');
        fs.writeFile(filePath,JSON.stringify(registration),(err)=>{
           console.log(err);
        });
    }
    static fetchAll(){
        return registration;
    }
}