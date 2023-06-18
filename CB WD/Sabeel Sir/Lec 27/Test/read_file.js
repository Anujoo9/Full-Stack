const fs = require('fs').promises;

const fileName = 'products.json'

async function main_read(){
 return  await fs.readFile(fileName,'utf-8');
 
   
}

// main_read()
module.exports = main_read;