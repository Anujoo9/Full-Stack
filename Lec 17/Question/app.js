
let x = [[1,2] ,[2,3,4]];

let ans = x.reduce((curr,acc) => {
    return curr.concat(acc)
},[]);

let sum = ans.reduce( (acc,currval) => acc+currval,0);
console.log(typeof(ans))
console.log(sum)


//


let input = [[1,2] ,{name:'max'}, [{name:'kartik',age:15}]];

let ans2 = input.reduce((acc,currval) => acc.concat(currval),[]);

console.log(ans2)

let sum_x = x.map((curr) =>{
    return curr.reduce((sum,num)=>sum+num)
})

console.log(sum_x)

let arr1 = [[1,2] ,{name:'max'}, [{name:'kartik',age:15}]];

// Array.isArray([1,23]) // returns true 


// Brute force

let res1 = [];

for (let el of arr1){
    if(Array.isArray(arr1)){
        res1.push(...el); //... = spread operator ,, operator is used to concatenate two arrays
    }else{
        res1.push(el);
    }
}