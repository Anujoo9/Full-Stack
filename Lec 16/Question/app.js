// Q.1 function which accepts str and int and retruns sum of ints;
const arr = [1,2,"3",4,"5"]

fun = num => {
    let sum =0
    for(let i of num ){
        if(typeof(i) === 'number'){
            sum += i;
        }
    }
    return sum;
}

console.log(fun(arr))



//Q. Function which capatlaize first letter in senetnce

const str = "The quick brown fox jumps over the lazy dog"

const words = str.split(' ')

cap = num1 =>{
    const temp = [];
    for (let i of words){
        // console.log(i[0].toUpperCase())
        // console.log(i.replace(i[0],i[0].toUpperCase()))
       temp.push(i.replace(i[0],i[0].toUpperCase()));
    }
    return temp.join(' ')
}


console.log(cap(words))