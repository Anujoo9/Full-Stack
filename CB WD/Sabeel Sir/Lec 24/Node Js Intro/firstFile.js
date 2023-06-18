function add(x,y){
    return x+y;
}
console.log(add(2,1))

const car = { // parent is Object.prototype
    name : 'BMW',
    coloe :'Black',
    price : 2000
}


console.log(car);
console.log(car.__proto__ === Object.prototype);


class Person{
    constructor(name,age){
        this.name = name;
    }

    get getName(){
        return this.name;
    }
}

const vivek = new Person('Vivek')
console.log(vivek.getName)