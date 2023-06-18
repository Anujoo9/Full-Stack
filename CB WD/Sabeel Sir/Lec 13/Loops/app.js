// Syntax for loop
// for (initalisation; conditon;updation){
//     work
// }


for ( let i =1 ;i<=10 ;i++){
    console.log(i)
}


for ( let num = 100 ; num <200 ; num =num-10){
    console.log(num)
    if (num ==0){
        break;
    }
}
for ( let i =1 ;i<=10 ;i++){
    if(i === 5) continue;
    console.log(i);
}

// While loop

let num =100

while ( num >= 0 ){
    console.log(num);
    num = num -10;
}

 const colors = ['blue' , 'orange' , 'green' , 'purple']

 for ( let i = 0 ; i< colors.length ;i++){
    console.log(colors)
 }

 for ( let i of colors){
    console.log(i)
 }

//  for ( i in colors){
//     console.log(i) // return index(keys)
//  }

const cart = [
    {
        name: 'IPhone',
        price : 20,
        qty : 3
    },{
        name: 'IPhone',
        price : 20,
        qty : 3
    }
]

let total_amount = 0;

for ( let item of cart){
    total_amount += item.price *item.qty
}
console.log(total_amount)

const car = {
    name: 'BMW', 
    price: 1000,
    color: 'Black'
}

for ( let i in car){
    console.log(i); // print keys
    console.log(`${i}--> ${car[i]}`); // print keys
}