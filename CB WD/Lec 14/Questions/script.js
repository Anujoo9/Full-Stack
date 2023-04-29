// // Print starts

// for(let i = 0 ; i <6 ; i++){
//     let empty = ""
//     for(let j =0 ; j<i ;j++){
//         empty += "* ";
//     }
//     console.log(empty)
        
    
// }
// for(let i = 0 ; i <6 ; i++){
    
//         console.log("*".repeat(i))
    
// }

// ------------------------------------------------------------------

// // reverse

// const sentence = "Hello world"
// let str1 = ''


// const resx = sentence.split(' ').reverse().join(' '); // araay then reverse then join
// console.log(resx);


// // reversed each word not the senectence
// const str = "Hello world"

// const res1 =  str.split()
// const res = []
// for (let word of res1){
//     const reversed_word = word.split('').reverse().join('');
//     res.push(reversed_word);
// }

// console.log(res.join(' '));

// ------------------------------------------------------------------

// // count frquency of each word in sentence : Use map

// const quest = "Hello World"

// const freq = new Map();

// const words = quest.split(' ')

// for ( let word of words){
//     if(freq.has(word)){
//        freq.set(word,freq.get(word)+1) 
//     }else{freq.set(word,1)}
// }


// for(let entry of freq){
//     console.log(`${entry[0]} --->${entry[1]}`)
// }
// ------------------------------------------------------------------
// Q.5 Remove duplicates

// Input :"This is a blue dog this is a blue bird"
// output: "dog bird"

// const sentence = "This is a blue dog this is a blue bird"
// const unique = new Set(sentence.split(' '));

// const res = [];

// for (let words of unique){
//     res.push(words)
// }
// const sent = res.join(' ');
// console.log(sent)

// ------------------------------------------------------------------
const person = {
    name: "Kartik",
    age : 20,
    isAdult : true,
    favColor:'blue'
}

// expected output = [['name', 'kartik'],['age', 20],[isAdult,true],[favColor,'blue']]
// const res = []
// for (let obj in person){
//     console.log(`${obj} --> ${person[obj]}`)

//     res.push([obj, person[obj]])
// }
// console.log(res)


console.log(Object.keys(person));// returns key
console.log(Object.values(person)); // retrun values
console.log(Object.entries(person)); // insted of using loops this converts obj to array // return array
// object to array