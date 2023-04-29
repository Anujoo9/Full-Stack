

const data = [{l:10, b:5}, {l:12 , b:4} , {l:8, b:10}]
//compute area ,digonal and permeter

const area = (l,b) =>l*b;
const perimeter = (l,b) =>2*(l+b);
const digonal = (l,b) =>Math.hypot(l,b);


function calculate(data,logic){
    const res = [];
    for (let i of data){
        res.push(logic(i.l,i.b));
    }
    return res;
}

console.log(calculate(data,area))
console.log(calculate(data,perimeter))
console.log(calculate(data,digonal))

///-------------------


let areaX = (data) =>{
    let temp = []
    for (let i of data){
        console.log(i.l*i.b )
        temp.push([i.l*i.b])
    }
    return temp
}
console.log(areaX(data))

// let digonal = (data) =>{
//     let temp = []
//     for (let i of data){
//         temp.push=[Math.sqrt(i.l)+Math.sqrt(i.b)]
//     }
//     return temp
// }

// let perimeter = (data) =>{
//     let temp = []
//     for (let i of data){
        
//         temp.push=[i.l+i.b]
//     }
//     return temp
// }


// console.log(digonal(data))
// console.log(perimeter(data))