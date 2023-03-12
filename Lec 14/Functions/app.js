function sayHello() {
    console.log("Hello")
}


function add(x, y) { // x,y function parameteres
    const res = x + y
    console.log(`Sum is ${res}`)
}


add(4, 5); // 4,5 arguments


function cube(x) {
    return x ** 3;
}

const cube_3 = cube(3);

console.log(cube_3)


// default params


function multiply(x, y, z) {
    return x * y * z;
}

const ans = multiply(2, 3); // return ans will return nan
const ans1 = multiply(2, 3, 4); // return ans will return nan
console.log("------")
console.log(ans)
console.log("------")
console.log(ans1)

// Q. Write a function to calculte sum of n positive integers

let inp = 3
function sum_positive_integers(n) {
    return n * (n + 1) / 2;
}



// Q. To print factorial
function factorial(n) {
    if (n === 1 || n === 0) return 1;
    let ans = 1;
    for (let i = n; i > 0; i--) {
        ans = ans * i;
    }
    return ans;
}
// Q. ncr funciton 
function n_C_r(n, r) {
    return (factorial(n) / factorial(r)) * factorial(n - r);
}
// print table

function table(n) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${n} x ${i} = ${n * i}`)
    }
}

console.log(`Sum-->${sum_positive_integers(inp)}`)
console.log(`Factorial -->${factorial(inp)}`)
console.log(`ncr-->${n_C_r(inp, 2)}`)
table(3)