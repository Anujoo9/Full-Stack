const isRaining = true;

if (isRaining) {
    console.log("Take the umberalla")
} else {
    console.log("Don't take the umberalla")
}


const randomNum = Math.floor(Math.random() * 100);

if (randomNum % 2 === 0) {
    console.log(`Even number ${randomNum}`)
} if (randomNum % 2 != 0) {
    console.log(`Odd number ${randomNum}`)
}


// Club
// let age = parseInt(prompt("Enter you Age")) // takes input


// console.log(age)
// console.log(typeof age)

// // Q. If age < 18 cannot enter the club and drink ,, 18 < age < 25 enter but can't drink ,, age >= 25 enter and drink



// if (age < 0) {
  
//         console.log("Invalid Age")
// } else if (age > 18 ) {

//     console.log("Sorry you are under age.")
// }
//  else if (age >= 18 && age < 25) {

//     console.log("Welcome ,You can't Drink")
// }
//  else{
//     console.log('Welcome ,You Drink')
// }

// Switch case

const day = 'Tue';

switch (day) {
    case 'Mon':
        console.log("It's Monday")
    case 'Tue':
        console.log("It's Tuesday")
    case 'Wed':
        console.log("It's Wednesday")
    case 'Thu':
        console.log("It's Thrusday")
    case 'Fri':
        console.log("It's Friday")
    default:
        console.log("Invalid Day")
}