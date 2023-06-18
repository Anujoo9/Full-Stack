
const lib2 = require('./lib2')

console.log('Inside lib1');

let one  = 'this is lib1'

function add(a,b){
    return a+b;
}

module.exports.lib2 = lib2;
module.exports.one = one;



// module.exports = {
//     lib2,
//     one:one,
//     add:add,
//     // add   // smae as above
// }