var name = 'Max'

function f(){
    console.log(name); // caching in window
//     window
// Window {window: Window, self: Window, document: document, name: '', location: Location, …}
    console.log(name1);
    console.log("hia");
}

function z(){
    var name = 'jhon'
    f();
    console.log(name);
}
z(); // output is Max jhon ,, becz lexical parent of f is global


