
function MainCourse(cb){
    setTimeout(() => {
    console.log("Main Course");
    cb();
    }, 3000);
}


function Sweets(drink){
    setTimeout(() => {
        console.log("Sweets")
        Drinks();
    }, 2000);
}


function Drinks(){
    setTimeout(() => {
        console.log("Drinks");
    }, 3000);
    
}

MainCourse(Sweets);
