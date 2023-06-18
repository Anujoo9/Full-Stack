// console.log(process.argv)



function greet(arr){
    
    for( let i = 2; i < arr.length ; i++ ){
        console.log(`Hello from ${arr[i]}`)
    }
   
}

function greet2(arr){
    for(let name of arr){
        console.log(`Hello from ${name}`)
    }
}

greet(process.argv)
const data = process.argv.slice(2);

greet2(data);

