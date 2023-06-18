
async function getFruits(name){
    const fruit ={
        pineapple : '🍍',
        apple : '🍏',
        mango : '🥭',
        grapes : '🍇'
        
    }
    if(!(name in fruit)){
        throw new Error(`Cannot find this fruit with key: ${name}`); // throw and return keyword stops execution
    }
    return fruit[name];
}

async function getFruitShake(){
    try{

    console.log('STARTING TO GET FRUITS')
    const apple = await getFruits('apple'); // await keyword thrown getFruit shake out of call stack then after funcation call all excuted then below line
    //awaits halts the function till function is resolved
    console.log(`Got 1st fruit ${apple}`)

    const grapes = await getFruits('grapes');
    console.log(`Got 2st fruit ${grapes}`)

    console.log('Ready for making Shake')
    }
    catch(err){
        console.log(err)
    }
}
console.log("START")
// getFruitShake();
console.log("END")





// getFruits('apple'); // This will return full-filled promise ,,is is fullfilled by passed('apple' here)  ,, because async keyword here
// getFruits('peach').then((val) =>{
//     console.log(val)
// }).catch((err)=>{
//     console.log(err)
// })


/////// Static methods provided by Promise class

// 1. promise.resolve
async function fun(){
    return 1+2;
}

function fun1(){
    return Promise.resolve(1+2);
}

// 2. Promise.reject
function fun2(){
    return Promise.reject("This is not funncy")
}

// 3. Promise.all , Promise.allSetteled , Promise.any , Promise.race

const task1 = () => {
    return fetch('https://fakestoreapi.com/products/1')
}
const task2 = () => {
    return fetch('https://fakestoreapi.com/products/2')
}
const task3 = () => {
    return fetch('https://fakestoreapi.com/products/3')
}
const task4 = () => {
    return fetch('https://fakestoreapi.com/products/4')
}
  
async function performBatchTask (){

    try{
        // This code follows a series pattern
        console.time('Task Timer');
        // const t1 = await task1();
        // const t2 = await task2();
        // const t3 = await task3();
        // const t4 = await task4();

// %% == mostly used

        //Now Complete parallel 
        const t1 =  task1();
        const t2 =  task2();
        const t3 =  task3();
        const t4 =  task4();
        // const result = await Promise.all([t1,t2,t3,t4]); // all resolved , if reject then exit // %%
        // const result = await Promise.allSettled([t1,t2,t3,t4]); // all resolved or reject // %%
        // const result = await Promise.race([t1,t2,t3,t4]); // first resolve or reject
        const result = await Promise.any([t1,t2,t3,t4]); //any send the first one resolved ,, worst case all rejct
        console.log(result)
        console.timeEnd('Task Timer')
        // console.log([t1.status,t2.status,t3.status,t4.status])
    }
    catch(err){
        console.log(err)
    }
}

performBatchTask()





