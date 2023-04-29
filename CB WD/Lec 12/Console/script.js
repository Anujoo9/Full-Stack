console.log('Hello World')
console.warn('This is a js warining')
console.error('This is a js error')


// String template literals -- we can write multil-line string

const messge = `This is 
some random message`
// back tick above tab key 

console.log(messge)

console.log((`Sum of 2 and 3 is ${2+3}`)) // after dollare ${} can add any js code

const firstName = 'Anuj'
const LastName = 'Yadav'
// Mr. Anuj Yadav
const fullName1 = `Mr. ${LastName} ${firstName}`
const fullName = 'Mr.' +firstName + LastName

console.log(fullName1)