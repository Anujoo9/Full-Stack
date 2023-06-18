console.log('Inside lib1');

let one  = 'this is lib1'

function add(a,b){
    return a+b;
}


module.exports = {
    one:one,
    add:add,
    // add   // smae as above
}