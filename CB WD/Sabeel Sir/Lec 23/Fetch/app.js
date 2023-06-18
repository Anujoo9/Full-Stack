
fetch('https://fakestoreapi.com/products/1',{
    // method:'GET',
    // headers:{
    //     "Content-Type" : " text/html"
    // },
})

.then((res) =>{
    // console.log(res)
    return res.json()
}).then((data) =>{
    console.log(data)
})