// function fun ( name , age){
//     // Here in this case 'this' refers to a window function
//     console.log(this);   
//     // this.name = name;
//     // this.age = age;
// }

// fun(); // fun() = window.fun() ,, window is global object , here this points to window object


// Constructor functions - first letter should be capital

function Car(name ,price ,color){ 
    this.name = name;
    this.price = price;
    this.color = color;

}

Car.prototype.getPrice = function(){
    return this.price;
}

const c1 = new Car('BMW' , 100 , 'red'); // Autoboxing ,,, when new keyword used ,,now this will not point to window object ,, this will point to 'c1'


const c2 = new Car('Audi' , 200 , 'Black')

console.log(c2)
console.log(c2.getPrice())

console.log( c1.__proto__ === Car.prototype)
console.log( Car.prototype.__proto__ === Object.prototype)