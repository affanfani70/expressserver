//jshint esversion:6

const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('<h1>Hellow World</h1>')
})
app.get('/about',(req,res)=>{
    res.send('<h1>I am M.Affan From Pakistan Love to code</h1>')
})
app.get('/contact',(req,res)=>{
    res.send('<h1>contact at: affanfani70@gmail.com</h1>')
})


app.listen(3000,()=>{
    console.log('server is listen at port 3000....')
})