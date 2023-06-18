const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;

let todos = []

//middleware
app.use(express.json());
app.use(express.urlencoded()); // for params

// app.use((req,res,next) => {
//     req.newObj = {
//         a:'hello',
//         b:true
//     }
//     next()
// })
// app.use((req,res,next) => {
//     console.log(req.kuchBhi);
//     next()
// })


app.get('/',(req,res)=>{
    res.send('Working Fine!');
})

app.get('/addtodo',(req,res)=>{

    // console.log(req.query.newTask);
    todos.push(req.query.newTask)
    // console.log(req)
    res.redirect('/');
})

app.get('/gettodo',(req,res)=>{
    res.send(todos);
})

app.post('/addtodo',(req,res) => {
    // console.log(req.body);
    let {name} = req.body;
    todos.push.name;
    res.send("Data Send successfully")
})

app.listen(PORT,()=>{
    console.log(`http://localhost:`+ PORT);
});