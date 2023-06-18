async function getFruits(name){
    const fruits = {
        apple : "A",
        Mango : "M",
        Kiwi : "K"
    }
    return fruits[name];
}

// console.log(getFruits('apple'));



getFruits('Mango')
.then((val)=>{
    console.log(val)
})