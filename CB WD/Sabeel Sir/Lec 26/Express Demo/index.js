const express = require('express');
const app = express();

// console.log(app);

// app.use((req,res)=>{
//     // console.log(req)
//     // console.log(res)
//     res.send('<h1>Hello from Express Server </h1>')
// })

app.get('/cat',(req,res)=>{
    res.send('meow');
})

app.get('/dog',(req,res)=>{
    res.send('Woof woof');
})

app.get('/monkey',(req,res)=>{
    res.send('Khooo Kho');
})

app.get('/give-json',(req,res)=>{
    const movies = [{
        id:1,
        name:'Don',
        imdb : 7,
        cast : ['Shahrukh Khan', 'PC']
    },
    {
        id:2,
        name:'Gangs of Wassepu',
        imdb : 10,
        cast : ['Nawj Khan', 'Sradar']
    },
    {
        id:3,
        name:'Don 2',
        imdb : 10,
        cast : ['Nawj Khan', 'Sradar']
    }
]
res.json(movies);
    if(Math.floor(Math.random()*100) %2 === 0){
        return res.status(400).json({message :'This is a bad request' });
    }

res.status(200).json(movies);
})

// This should be written in the end
app.all('*',(req,res) =>{ 
    res.send("You are requesting the wrong URL")
}) 

app.listen(1234, ()=>{
    console.log(`Server started at port 1234`);
})