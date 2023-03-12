/*
console.log('START')

var a = 100;

function add() {
    var b = 200;
    function sayHello(){
        console.log(b);
        console.log("Inside sayHello")
    }
    sayHello();
    console.log(b);

}

console.log(a)
add();

console.log('END')


*/

// Hoisting is a concept that enables us to extract values of variables and functions even before initializing/assigning value without getting errors and this is happening due to the 1st phase (memory creation phase) of the Execution Context. If use let or cosnt then error ,so use var only


console.log(x)
var x =10000


// temporal dead zone,, exists for x before 25 line

//----------------------------------------------------------------------------------------------------

/*
//function Expression
var func = function cuberRoot(num){
    return Math.cbrt(num);
}
//anonymous function
var func = function (num){
    return Math.cbrt(num);
}

console.log(func(2))

// Arrow function - Syntactical Sugar 
var cuberRoot = (num) => {
    return Math.cbrt(num);
}
console.log(cuberRoot(3))

//Arrow function implicit return // for single line 
var cube1_root = (num) => Math.cbrt(num);
// var cube1_root = num => Math.cbrt(num);// Both same


// let cube1_root = (num) => Math.cbrt(num); // Both will work fine
// const cube1_root = (num) => Math.cbrt(num);

console.log(cube1_root(3))

*/

//-----------------------------------------------------------------------------------------------------

console.log(c);

// console.log(squareroot(2))// type error

// console.log(cube())// type error

var c = 400;

var squareroot = function (num) {
    return Math.sqrt(num);
}

var cube = (num) => num **3;

