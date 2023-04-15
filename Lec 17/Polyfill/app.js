


// const raddii = [1,23,4,53,6,36,5]


// const area = (radius) => Math.PI*radius*radius;

// const diameter = (radius) =>2*radius;


// function calculate (radii , logic){
//     const res = [];

//     for (let radius of radii){
//         res.push(logic(radius))
//     }
//     return res;
// }

// console.log(calculate(raddii, area))


// const ans =raddii.map(function (radius){
//     return Math.PI*radius*radius;
// })


// console.log(ans)


// ============== polyfill =============== XX|XX ======

const radii = [1, 23, 4, 53, 6, 36, 5]

const area = (radius) => Math.PI * radius * radius;

const diameter = (radius) => 2 * radius;

Array.prototype.myMap = function (logic) {
    const res = []; 
    for (let element of this) {
        res.push(logic(element));
    }
    return res;
}

const res = radii.myMap(area);

console.log(res)

//Home work write polyfill for flat , find , some , sort 

Array.prototype.flat = function (input) { input.reduce((acc, currval) => acc.concat(currval), []) };

const even = (num) => num % 2 == 0;

Array.prototype.filter = function (logic) {
    const res = [];
    for (let element of this) {
        if (logic(element)) {
            res.push(element);
        }
    }
    return res;
}

console.log(radii.filter(even))

// SORT



Array.prototype.sort = function (logic) {
    const res = [];
    for(let element of this ){
        if (logic(element)) {
            res.push(element);
        }
    }   
}


console.log(radii.sort())
// SOME


Array.prototype.some = function (key) {
    
    for(let element of this){
        if (element === key) {
            return true
        }
    }   
    return false;
}
console.log(radii.some(1))


// Find

Array.prototype.sort = function (element) {
    const res = [];
    for(let element of this ){
        if (logic(element)) {
            res.push(element);
        }
    }   
}