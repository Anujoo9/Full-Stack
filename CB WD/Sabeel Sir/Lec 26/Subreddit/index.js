const express = require('express');
const main_read = require('../../Lec 27/Test/read_file');
const app = express();



app.get('/r/cat',(req,res)=>{
    res.send('meow');
})

app.get('/r/dog',(req,res)=>{
    res.send('Woof woof');
})

app.get('/r/monkey',(req,res)=>{
    res.send('Khooo Kho');
})

// path parameter
app.get('/r/:subredit', (req,res)=>{ 
   const {subredit} = req.params
    console.log(req.params)
    res.send(`You are requesting ${subredit}`)
})

// path param
app.get('/products/:productid/comments/:commentid',(req,res) =>{
    const {productid,  commentid} = req.params;
    
})

app.listen(8088, ()=>{
    console.log(`Server started at port 8088`);
})


