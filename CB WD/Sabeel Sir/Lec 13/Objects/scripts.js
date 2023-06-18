// objects are refrence type in javascript

const person = {
    name : 'Anuj',
    age : 23,
    isAdult: true
}

console.log(person)

person.mobile = '44666565' // added or will be overrided 

//To access
person.age
// or 
person['age']

const aquamen = {
    name:'Aquamen',
    imdb: 4,
    director : {
        Firstname :'James',
        Lastname: 'Wan'
    },
    cast :[
    {
    name : "Jason Momoa",
    
        age : 100
    },
    {
        name : 'Jhonny Deep',
        age : 1000
    }
    ]
}
aquamen.cast.push({name:"Trex" ,age:9999})

delete person.mobile // to delete retuns boolean

// to check key exists in obejct 
'name' in person

