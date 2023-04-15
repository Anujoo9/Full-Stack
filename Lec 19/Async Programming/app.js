

// function fun(){
//     console.log("inside fun")
// }

// function delay(n){
//     for ( let i = 0 ; i< n ;i ++){
//         const curentTime = new Date().getTime();
//         while (new Date().getTime() < curentTime + 1000){ }
//     }
//     fun();
// }
// console.log('START');
// // delay(5);

// setTimeout(fun,5000);
// const id = setInterval(() =>{
//     console.log("Inside Timer")
// },1000); // registered timer with 1 sec

// setTimeout(() => {
//     clearInterval(id);
// },10000); // clears registered after 10 second
// //Set interval cal function after every 1 sec, infintie loop,, to stop it retrun id,, always remove timers

// // clearInterval()

// console.log('END');

// // new Date();
// // new Date().getDay()

// // new Date().getFullYear()
// // new Date().getMonth()
// // new Date().getTime() // milli seconds passed since 1st jan 1970 -- Epoch Time


// // Web Apis
//         // setTiout()
//         // setInterval()
//         // localStorage()
//         // console
//         // dom


// setTimeout(() =>{
//     console.log('Inside set timeout')
// },1000);

// let num = 100;
 
// while(num <= 200){
//     console.log(num);
//     num = num - 10;
// }

// -----------------

for(var i = 0 ; i < 5 ; i++){ // if i is var then same i will be updated , in let case new i wil be created brcz of block space scope and due to closure cb remebers
    setTimeout(function cb() {
        console.log(i)
    },1000);
}

for(var i = 0 ; i < 5 ; i++){ 
    function fun() {
        var k = i ;
        setTimeout(function cb(){
            console.log(k);
        },1000);
    }
    fun();
}
console.log("xxxxxxxxx")


// -- better way 
for(var i = 0 ; i < 5 ; i++){ 
    (function fun() {
        var k = i ;
        setTimeout(function cb(){
            console.log(k);
        },1000);
    })();
   
}