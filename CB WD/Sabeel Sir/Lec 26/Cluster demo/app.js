const http = require('https');

const server = http.createServer((req,res)=>{
    res.statusCode =200;
    let sum = 0;
    for(let i = 0; i < 10000; i++){
        sum += i;
    }res.end('Request completed')
});

server.listen(300, ()=>{
    console.log(`server started at 300`)
})

// ab -n 1000 -c 100 "https:"