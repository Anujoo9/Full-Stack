const express = require('express');
const app = express();
const main_read = require('./read_file.js')


app.get('/products/:id',async(req,res)=>{
    const {id}  = req.params;
    const data = await main_read();
    const da = JSON.parse(data);
    console.log(da.name)
    res.send(`You are requesting ${id}`)
})

app.get('/products/',async(req,res)=>{
    const data = await main_read();
    res.send(data);
})


const port = 8080
app.listen(port ,() =>{
    console.log(`Server started at port ${port} `)
})