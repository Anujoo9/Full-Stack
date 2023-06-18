
const nums = [1,2,3,4,32, 355] // to find element in arr use .indxof

console.log( nums.indexOf(32))

//  find method

const firstGrateherThan5 = nums.find((i) => i >5);

console.log(firstGrateherThan5)

const products = [
    {
        id:1,
        name:'Iphone',
        price:200
    },
    {
        id:2,
        name:'dis',
        price:2400
    },
    {
        id:3,
        name:'Mac',
        price:2100
    }
]

const product = products.find((i) => i.id ==2);
console.log(product);

// Some method return true or false

const ispresent = products.some((i) => i.id ==3);
console.log(ispresent)

//sort method destructive method

const numbers = [43,5345,3,36,363]

numbers.sort() // sorted in lexiocon order
console.log(numbers)

const numbers_1 = [43,5345,3,36,363]

numbers.sort((a,b) => a-b) // sorted in lexiocon order
console.log(numbers)

let sorted = products.sort( (i,j) => i.price - j.price);
console.log(sorted)
console.table(sorted)

