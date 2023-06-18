
// Implicit binding ,, binded to caller object
const snake = {
    name: 'Cobra',
    length :10,
    color :'Black',
    speak: function(){
        return `${this.name}------------->Hissssssss`;
    }
}

console.log(snake.speak())


// Explicit binding

// function fun(){
//     console.log(this);  
// }
function fun(name, age){
    console.log(this);  
    console.log(age);  
    console.log(name);  
}

const a = { 
    l:10,
    m:true
}

// fun.call(a);
fun.call(a, 'name' ,45); /// sytnax first is the one to which we want 'this' to point // will be called instanly

const f = fun.bind(a); // will be called later
//.... 1000 lines
f("x",2);
