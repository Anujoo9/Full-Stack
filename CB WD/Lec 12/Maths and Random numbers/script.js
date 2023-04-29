console.log(Math.abs(232432))
console.log(Math.floor(5.6))
console.log(Math.ceil(5.6))
console.log(Math.abs(-232432))
console.log(Math.round(4645.64))
console.log(Math.sqrt(4645.64))
console.log(Math.sqrt(-1))
console.log(Math.cbrt(12))
console.log(Math.hypot(3,4)) 
console.log(Math.max(3,1,4)) 
console.log(Math.max(3,1,4)) 
console.log(Math.min(3,1,4)) 
console.log(Math.pow(3,4)) 

/// Random Numbers
console.log(Math.random()) // no parameter it gives random no b/w 0(included) and 1(not included) -- in points

//for random number b/w 0 and 10

console.log(Math.floor(Math.random()*10))
console.log(Math.floor(Math.random()*10))

console.log(`Random no bw 83 and 87`)
// Q. Find random number including 83 and 87

console.log(Math.floor((Math.random()*10*8) + 3))
console.log(Math.floor((Math.random()*5) + 83))


/// Comparision operators:
console.log(100>200)
console.log(100<200)
console.log(100<=200)
console.log(100>=200)
console.log(100!=200)
console.log('100'== 100) // true loose equality // implicit type casting
console.log('101'== 100) // False loose equality // implicit type casting
console.log(''== 0) // true becz empty sting typecaseted to zero // implicit type casting
console.log(''=== 0) // False becz no type casting
// https://dorey.github.io/JavaScript-Equality-Table/