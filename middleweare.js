const express = require('express');
const app = express();

// const midleFunc = function (req, res, next){
//     console.log("Hello the is midle function")

//     req.midleFunc =  Date.now();
//     next();
// }
// app.use(midleFunc);
// app.get('/',(req,res)=>{
//     res.write("<h1>testing middle function</h1>");
//     res.write(`<h4>the current time is: ${req.midleFunc} </h4>`);
//     res.send();
// })
function logOriginalUrl (req, res, next) {
    console.log('Request URL:', req.originalUrl)
    next()
  }
  
  function logMethod (req, res, next) {
    console.log('Request Type:', req.method)
    next()
  }
  
  const logStuff = [logOriginalUrl, logMethod]
  app.get('/', logStuff, (req, res, next) => {
    res.send('User Info')
  })


app.listen(3000, () => {
    console.log('server is listen at port 3000....')
})