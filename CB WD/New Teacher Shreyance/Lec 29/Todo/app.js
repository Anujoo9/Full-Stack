const path = require('path');
const express = require('express');
const exp = require('constants');
const app = express();
const PORT = 4444;

let todos = []

app.use(express.urlencoded());
app.use(express.json());
app.use(express.static(path.join(__dirname,'public')))


// app.get('/script.js',(req,res) =>{
//     res.sendFile(path.join(__dirname,'script.js'));
// })

app.post('/addtodo',(req,res) => {
    
    let {newTask} = req.body;
    console.log(req.body);
    console.log(newTask);
    todos.push(newTask);
    
    res.send(todos)
})

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'));
})

app.listen(PORT,()=>{
    console.log(`http://localhost:`+ PORT);
});

