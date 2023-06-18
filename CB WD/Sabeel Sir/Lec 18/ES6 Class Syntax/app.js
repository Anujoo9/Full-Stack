// class Car{
//     static className = "Car"
//     constructor(name, price ,color){
//         this.name = name;
//         this.price = price;
//         this.color = color;
//     }

//     getDiscountedPrice(discount){
//         return this.price-(this.price*discount/100);
//     }

    //getter and setter methods

//     get getPrice(){
//         return this.price;
//     }
//     get getName(){
//         return this.name;
//     }
//     get getColor(){
//         return this.color;
//     }

//     set setPrice(newPrice){
//         if(newPrice < 0){
//             this.price = 0;
//             return;
//         }
//         this.price = newPrice;
//     }


//     //static method can be directly called by class

//     static sayHello(){
//         console.log("Hello")
//     }
// }


// const c1 = new Car('Audi', 100 , 'White');
// const c2 = new Car('BMW', 200 , 'Red');


//
class Point{

    constructor(x,y){
        this.x = x;
        this.y = y;

    }

    getEculidianDist(point){
        const x1 = this.x;
        const y1 = this.y;
        const x2 = point.x;
        const y2 = point.y;
        return Math.hypot((y2-y1), (x2-x1));
    }
    
    static distance(p1,p2){
        return Math.hypot((p2.y-p1.y),(p2.x-p1.x))
    }
}

p1 = new Point(2,3)
p2 = new Point(4,4)


console.log(p1.getEculidianDist(p2))
console.log(p2.getEculidianDist(p1))


console.log(Point.distance(p1,p2))




class Person{
    constructor (name,age){
        this.name = name;
        this.age = age;
    }
    get getName(){
        return this.name;
    }

    sayName(){
        return `hi Parent name is ${this.name}`
    }
}

class Student extends Person{
    constructor(name,age, rollNo,){
        super(name,age);
        this.rollNo = rollNo;
    }

    get getRollNo(){
        return this.rollNo;
    }
    sayName(){
        return `hi Parent name is ${this.name}`;
        // return super(this.sayName);
    }

}

const s1 = new Student('Abc', 20 , 2131);

console.log(s1.getName)
console.log(s1.getRollNo)
// console.log(s1.__proto__)
