const inp = document.querySelector('.inp');

inp.addEventListener('focus',()=>{
    inp.style.backgroundColor = "yellow"
})
inp.addEventListener('blur',()=>{
    inp.style.backgroundColor = ""
})

inp.addEventListener('blur',(e)=>{
    inp.style.backgroundColor = "";
    // console.log(e.target.value)
})
inp.addEventListener('keydown',(e)=>{
    
    // console.log(e.target.value)
    // console.log(e.key)
})