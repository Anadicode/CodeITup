const path=require('path');

const rootdir=require('../utils/pathUtils');

exports.getIndex=(req,res,next)=>{
      console.log('index page is here');
      res.sendFile(path.join(rootdir,'views','index.html'));
};