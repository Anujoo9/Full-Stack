const btn = document.querySelector('.btn')

// console.log(btn)
console.dir(btn)

// btn.onclick= function(){
//     console.log("clicked")
// }
// // this will override the exisiting ones

// btn.onclick = ()=>{
    // console.log("Really? Clicked me")
// }

// btn.addEventListener('click', ()=>{
//     console.log("Clicked ")
// })
// btn.addEventListener('click', ()=>{
//     console.log("Clicked me Really ?")
// })
// btn.addEventListener('dblclick', ()=>{
//     alert("Double Clicked me Really ?")
// })

const para = document.querySelector('p')

para.addEventListener('copy',(e) => {
    console.log("Can't copy boi")
    console.log(e)
    // alert("Cheater")
})
para.addEventListener('mouseenter',(e) => { //by default event
    para.style.backgroundColor = "red"  
})
para.addEventListener('mouseout',()=>{
    para.style.backgroundColor = '';
})