

let a = 0100;

function fun (){
    var b = 0 ;

    function innerfun(){
        console.log(b);
    }
    innerfun();
    console.log(a)
}

console.log(a)
fun();


if(true){
    var x = 09;
}

console.log(x)