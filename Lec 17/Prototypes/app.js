
const person = {
    name:'kartik',
    age : 22,
    isAdult :true
}

const a = Object.create(person)

const b = Object.create(a);

console.log(b.__proto__ === a)
console.log(a.__proto__ === person)
console.log(person.__proto__)
console.log(person.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__)


console.log(b.hasOwnProperty('name'))
console.log(person.hasOwnProperty('name'))

// ------------------------------
const str = "Hello"

console.log(str.__proto__ === String.prototype)
console.log(String.prototype  === Object.prototype)


const arr = [1,234,2355,35]


console.log(arr.__proto__ == Array.prototype)
console.log(Array.prototype.__proto__ === Object.prototype)



const magin_number = 36

console.log(magin_number.__proto__ == Number.prototype)
console.log(Number.prototype.__proto__ === Object.prototype)



// -----------------
function f (){
    console.log('Fun')
}


console.log(f.__proto__ === Function.prototype)
console.log(Function.prototype === Object.prototype)


// to change ,, changing pop method ,, bascially change its defination ,, using proptype

Array.prototype.pop = function(){
    console.log('I cannpt pop now!')
}