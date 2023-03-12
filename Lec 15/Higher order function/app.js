/*
// 
function fun (func){ // func =fun() ,, fun is Higher order function
    var b = 200;
    console.log(b);
    func();
}

function a(){
    console.log('Inside a')
}

fun (a);

*/


function b(){
    function c (){
        console.log("inside c")
    }
    // return ()=>{ // or this
    //     console.log("inside c")
    // }
    return c;
}

const f = b();

// console.log(f);
f();