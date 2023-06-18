
const fs = require('fs');
const path = require('path');

const fruits = [{
            name: 'mango',
            quantity: 2,
        }, {
            name: 'chiku',
            quantity: 1
        }, {
            name: 'orange',
            quantity: 2
        }, {
            name: 'Banana',
            quantity: 3
        }, {
            name: 'apple',
            quantity: 6
        }
]

const fruitsData = JSON.stringify(fruits)
const fileName = 'data.json'
console.log(__dirname) // wittens current path

const location = path.join(__dirname,'data',fileName)
 
// write as json  // can create file only can not folder
fs.writeFile(location,fruitsData,(err)=>{ 
    if(err) console.log(err);
    else console.log("Done!")
});


// // write as txt
// fs.writeFile('data.txt',fruitsData,(err)=>{
//     if(err) console.log(err);
//     else console.log("Done!")
// });
