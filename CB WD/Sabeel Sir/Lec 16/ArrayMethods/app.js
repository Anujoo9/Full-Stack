
// MAP 
/*
const nums = [1,2,3,4,5,6,7,8,9,10]

// const squareNums = nums.map((num)=>{
//     console.log(num);
// })

const squareNums = nums.map(num=>{ // defined function here only
    return Math.sqrt(num);
})
const cubeNums = nums.map((num,idx,array)=>{ // as defined this is things we can acess in callable function
    return {cubeRoot:Math.cbrt(num), index: idx};
})

console.table(cubeNums);

console.log(squareNums)

// long way above is easy one
const Numssq = nums.map(sq);

function sq(val){
    return Math.sqrt(val);
}

console.log(Numssq)
*/

// Filter works on boolean callback functions

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function isEven(num) {
    if (num % 2 === 0) {
        return true;
    }
    return false;
}

const evenNums = nums.filter(isEven); // isEven is boolen function

console.log(evenNums)

//Question
const vehicles = [
    { wheels: 3, color: 'blue' },
    { wheels: 7, color: 'pink' },
    { wheels: 4, color: 'white' },
    { wheels: 100, color: 'orange' },
    { wheels: 2, color: 'black' },
    { wheels: 2, color: 'red' },
    { wheels: 4, color: 'white' },
    { wheels: 4, color: 'white' },
    { wheels: 4, color: 'white' },
    { wheels: 4, color: 'white' },
    { wheels: 4, color: 'white' },
    { wheels: 4, color: 'white' }
]




const two = vehicles.filter((v) => vehicles.wheels === 2 );
console.log(two);
const four = vehicles.filter((v) => vehicles.wheels == 4);
console.log(four);


//reduce  ,, aggregation opertation ,, aggregated to one

// const sumOfu=Nums = nums.reduce(function (accumalator,currentNUm){
//     return sum+currentNUm;
// });
const sumOfu=Nums = nums.reduce(function (sum,currentNUm){
    return sum+currentNUm;
});
const sumOf=Nums = nums.reduce(function (sum,currentNUm){
    return sum+currentNUm;
},0); // initalise with first elements

console.log(sumOfu);
console.log(sumOf);

// Question calculte final amount using reduce

const carte = [
    {name:'Iphone' , qty :5 , price: 10},
    {name:'Ipad' , qty :500 , price: 10},
    {name:'Max' , qty :50 , price: 10},
]

console.log("final price")
// const finalP = carte.reduce( function (sum,i){ // function (accumaltor,item)
//     return sum + i.qty*i.price;;
// },0);
const finalP = carte.reduce((sum,i) => sum + i.qty*i.price,0);

console.log(finalP);


// Homework

const arr = [[1,2,3], [4,5,6],[7,8,9]]

const ansx = arr.reduce((sum,i) => sum + i ,0)

