// Array

const arr = [1,3,4,52,52,52];

arr

arr[0]
arr[2]
arr[3]
arr[300] // undefined

// Arrays are hetrogenous

const arr2 = [1,2,'he', [2,42,5,'apple'], null, true] // valid array

const color = ['blue' ,'black']

color.push('red') // append at end
color.pop() // delete at end and retruns element if wanted to store
color.shift() // delete at start and retruns element if wanted to store
color.unshift('pink','boi') // apppend at start



// Functions
// arr.concat() -- adds two array arr1.concat(arr2); -- arr1 then arr2 -- arr1.concat(arr2,sfsdf,fsdfsdf); ,,need to store
// arr.slice()
// arr.splice()  //destrucitve method
// arr.join() // join each eleement of array retruns
const num = [1,2324,3,5435,345,45,345]
num.join('--->') // 1--->2324--->

// arr.reverse() // reverse array ,, destructive
// arr.indexOf() or arr.includes() or arr.lastIndexOf()


const fruits = ['apple','mango','kiwi','grapes','lichi']

fruits.slice() // use to copy the array
fruits.slice(0) // retrun whole array from 0
fruits.slice(1,4) // retruns array from 1 and 4 is not included
fruits.slice(-1) // retruns array from end starts with 1

fruits.indexOf('kiwi') // returns index of the element 
fruits.lastIndexOf('kiwi') // returns index of the element starts from last ,, retrun index from start

fruits.includes('kiwi') // return true or false

// // Splice
// splice(start) // fruits.splice(3) // deletes all previous elements 
// splice(start, deleteCount)
// splice(start, deleteCount, item1)
// splice(start, deleteCount, item1, item2, itemN)

const str = "Apple"
console.log(str.replace('p','x'))
str.replace('a','xx')
console.log(str)

const colors2 = ['blue', 'green' , 'orange']

const col2copy = colors2 // array are refrence type in JavaScript

col2copy.push('black' , 'aqua') // will push in original array too

// copy an array use slice method

const board = [[1,2,3,4,5],[2,3,5,2,5]]