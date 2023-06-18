
console.log('START')

// consuming the promise
const res = fetch('https://fakestoreapi.com/products/1');

res.then((response) =>{
    return response.json(); // This also return a promise

})
.then((data) =>{
    console.log(data)
})
.catch((err) =>{
    console.log(err)
})

console.log(res);
console.log('START')


