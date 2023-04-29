function fun(){
    var a = 100;
     function innerFun(){
        a++;
     }
     return innerFun;
}

// closure is function along with lexical envt.
//closure created by js engine

let f = fun(); // return innerFun function
console.log(f)
 //closure 
f();//101
f();//102
f();//103
f();//104
f();//105

let f1 = fun(); // return innerFun function,

f1();// 101
f1();// 102
f1();// 103
f1();// 104

