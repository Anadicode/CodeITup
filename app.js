const express=require('express');

const index= require('./routes/index');
const {hostRouts}=require('./routes/hostRouts');
const basicRouts=require('./routes/basicRouts');
const Error = require('./routes/Error404');
const app= express();

app.set('view engine','ejs');  // after installing here we set up our Ejs 
app.set('views','views');

app.use(express.urlencoded()) // adding a middel ware for parsing

app.use(index);
app.use('/basic',basicRouts);
app.use('/host',hostRouts);
app.use(Error);





const port=3000;
app.listen(port,()=>{
  console.log(`server is running at http://localhost:${port}`);
});