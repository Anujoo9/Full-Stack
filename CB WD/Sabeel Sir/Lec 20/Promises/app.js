
const p = new Promise((resolve, reject) => { //resolve and reject are also funciton
 
        const random = Math.floor(Math.random() * 10 + 1);

        if (random % 2 === 0) {
            resolve(random)
        } else {
            reject(new Error('Not a even number'));
        }

});

p.then((value)=>{ // resolve
    console.log('inside Resoolve')
    console.log(value)
})
.catch((err)=>{ // reject
    console.log('inside reject')
    console.log(err.message)
})