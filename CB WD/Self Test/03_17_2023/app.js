// // const carte = [
// //     {name:'Iphone' , qty :5 , price: 10},
// //     {name:'Ipad' , qty :500 , price: 10},
// //     {name:'Max' , qty :50 , price: 10},
// // ]

// // console.log("final price")

// // const finalP = carte.reduce((x,i) => x + i.price*i.qty,0)

// // console.log(finalP);


// const arr = [[1,2,3], [4,5,6],[7,8,9]]

// const sx = arr.reduce((acc,curr) =>{
//    acc + (curr.reduce((h1,h2) => h1+h2,0))
// },0);
// // carte.reduce((sum,i) => sum + i.qty*i.price,0);
// console.log(sx)

// // const sum = arr1.filter((x) =>  x>1 );
// // console.log(sum)



(function(){
   console.log("fun")
})();

(function() { console.log("Hello!"); })();

const x = function(){
   console.log("apple")
};
x()

const a = (x) =>  x+2;
console.log(a(2))