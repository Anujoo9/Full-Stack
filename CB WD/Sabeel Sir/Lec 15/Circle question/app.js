/*
radii = [1,2,3,4,5,6,7]


var diameter = num => {
 return 2*num;
}

var area = num => {
 return Math.PI*num*num;
}

var circumfrence = num => {
 return 2*Math.PI*num;
}

diam=[]
areaa =[]
circum = []
for ( let i = 0 ; i <radii.length ;i++){
    diam.push( diameter(radii[i]))
}
for ( let i = 0 ; i <radii.length ;i++){
    areaa .push(area(radii[i]))
}
for ( let i = 0 ; i <radii.length ;i++){
    circum.push(circumfrence(radii[i]))
}

console.log(diam)
console.log(areaa)
console.log(circum)
*/


// Using Higher order function

const radii = [1,2,3,4,5,6,7]

const diameter = radius => 2*radius;
const area = radius => Math.PI*radius*radius;
const circumfrence = radius => Math.PI*2*radius;


function calculate (radii,logic){
    const res =[];
    for (let radius of radii){
        res.push(logic(radius));
    }
    return res;
}

console.log(calculate(radii,diameter));
console.log(calculate(radii,area));
console.log(calculate(radii,circumfrence));