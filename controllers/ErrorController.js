const path=require('path');
const rootdir=require('../utils/pathUtils');

exports.error=(req,res,next)=>{

    console.log('page not found');
  res.status(404).sendFile(path.join(rootdir,'views','Error.html'));
}