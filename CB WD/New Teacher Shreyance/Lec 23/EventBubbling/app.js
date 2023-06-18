const grandparent = document.querySelector(".grand-parent");
const father = document.querySelector(".father");
const mother = document.querySelector(".mother");


mother.addEventListener('click',(e)=>{
    e.stopPropagation() // stop the outward/inward popogation
    console.log('Mother  knows')
},true)    // by default its false means exute when entering,, true me jaate waqt execute kar dega
father.addEventListener('click',(e)=>{
    e.stopPropagation() 
    console.log('father knows')
})
grandparent.addEventListener('click',()=>{
    console.log('Garnd parent knows')
})