
// npm init
// npm i express
// nodemon ./app.js localhost 4000
// npm run nodemon

const express = require('express');
const app = express();

const PORT = 4000;

let todo = []

app.get('/', (req,res)=>{
    console.log(req);
    res.send("This is our first server");
    // res.send("<h1>This is our first server</h1>");
})
//    /: is variable below

// app.get('/login/:name', (req,res)=>{
//     // console.log(req);
//     res.send(`Welcome To Login Page ${req.params.name}`);
// })

app.get('/login/', (req,res)=>{
    // console.log(req);
    res.send(`Welcome To Login Page ${req.query.name}`);
})

app.get('/todo', (req,res)=>{
    res.send(todo);
})

app.listen(PORT, ()=>{
    console.log("Server is UP!! at port 4000", PORT);
})