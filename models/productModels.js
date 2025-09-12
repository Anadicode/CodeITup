const fs = require('fs');
const path = require('path');

const rootDir = require('../utils/pathUtils');

const products=[];

exports.Product= class product{
    constructor(productName,Category,Description,Price){
      this. productName=productName;
      this. Category=Category;
      this. Description=Description;
       this. Price=Price;
    }

    save(){
        products.push(this);
        const filePath=path.join(rootDir,'Data','products.json');    //writing data into files
        fs.writeFile(filePath,JSON.stringify(products),(err)=>{
           console.log(err);
        });
    }

    static fetchAll(){                   // static method is same for all the entir class 
        return products;
    }
}