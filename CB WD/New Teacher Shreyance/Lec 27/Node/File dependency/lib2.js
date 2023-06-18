const lib1 = require('./lib1')

console.log('Inside lib2');
console.log('Balh blah');
let two = "this is two"

function mul(a,b){
    return a+b;
}

module.exports.lib1 = lib1;
module.exports.two = two;

// module.exports = {
//     lib1,
//     mul:mul
// }
