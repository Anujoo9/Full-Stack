const msg = 'How are you ?'

// Everything in JS is string

msg.toUpperCase()

console.log(msg)  // no change in original
console.log(msg.toLowerCase())  // no change in original


const msg_uppercase = msg.toUpperCase()
console.log(msg_uppercase)
console.log('A'.charCodeAt())
console.log('Adcsdf'.charCodeAt(2))

const str = "Hello World"
console.log(typeof str[0])
console.log(str[0])
console.log(str[6])
console.log(str.length) // its property 
console.log(str.substring(2))
console.log(str.substring(2,7))
console.log(str.substring(-2,7))
console.log(str.substring(-2,-7)) // empty string check on mdn

const copy_String = str.substring() // alternate way of coping 

console.log(copy_String)

// Primitives are immutable



const msg1 = '    dfsdf dfsdf   '

console.log(msg1.trim())


const str1 = 'Hello'

console.log(str.replace('H','x'))
console.log(str.replaceAll('l','x'))
console.log(str.repeat(5))

const url = "https://facebook.com"

console.log(url.startsWith('https'))
console.log(url.startsWith('h'))
console.log(url.endsWith('https'))

const sentance = "The quick brown fox jumps over the lazy dog"

console.log(sentance.indexOf('fox'))
console.log(sentance.indexOf('e' , 4)) // will start searching from 4 th index
console.log(sentance.indexOf('car')) // returns -1 means does not exists
console.log(sentance.lastIndexOf('e'))

// Q. Find the second occurance of fox from start
const sentance_1 = "The quick brown fox  jumps fox fox over fox the lazy dog"
// const sentance_1_strip = sentance_1.replace("fox","")

let pos = sentance_1.indexOf('fox')
// console.log(sentance_1_strip)

// console.log(sentance_1_strip.indexOf('fox'))
console.log(sentance_1.indexOf('fox', pos+1))
console.log(sentance_1.includes('oapple')) // retrun true or false


// url2.split()
const url2 = "https://funcbook.com/systems/stroage.profile.jpg"

url2.split('/') // retrun array and splits aroun /

// url2.split('/').pop()


