const fs = require('fs');
const path = require('path');
const fileName = 'data.json'

const location = path.join(__dirname,'data',fileName)

// fs.readFile(location,(err, data)=>{
//     if(err) console.log(err);
//     else console.log(data.toString())
// })

fs.readFile(location,'utf-8',(err, data)=>{
    if(err) console.log(err);
    else console.log(data)
})

//works same as above
// fs.readFile(location,'utf8',(err, data)=>{
//     if(err) console.log(err);
//     else console.log(data)
// })