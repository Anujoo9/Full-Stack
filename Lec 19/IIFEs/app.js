// Immediately invoked functional expressions

function add(){
    var a = 100;
    var b = 29;    
    var c = a+b ;
    console.log(c);
}
add();
// better way to write above

(function () {
    var a = 100;
    var b = 29;    
    var c = a+b ;
    console.log(c);
})(); // IIFEs --control scope
