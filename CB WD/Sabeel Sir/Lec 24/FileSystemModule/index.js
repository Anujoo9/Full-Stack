const fs = require('fs');

console.log('START');
// console.log(fs)
// const data = "Fun"

// IO/Operation 
// fs.writeFileSync('abc.txt', data); // will block the code if large data to write // Thread blocked


const data = "Hellow from file system but with non-blocking I/O"
fs.writeFile('abcd.txt',data, {encoding: 'utf8', flag:'w'}, (err) =>{
    if(err){
        throw err;
    }
    console.log('Written Successfully');
})

console.log('END');