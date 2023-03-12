// Q. Calculate area of cricle.

function area(radii) {
    const result = []

    for (const radius of radii) {
        result.push(Math.PI * radius * radius)
    }
    return result
}

const r = [1, 2, 3, 4, 5, 6, 7]
console.log(r)
const final_area = area(r);

console.log(final_area)

//Q. Write a fucntion to file casing in a string

// function flipCasing(str){  // won't work bcz string imuutable
//     for (let i = 0 ; i < str.length ;i++){
//         if(str[i].toLowerCase === str[i]){
//             str[i].toUpperCase();
//         }else{
//             str[i] = str[i].toLowerCase();

//         }
//     }
//     return str;
// }


function flipCasing(str) {
    let res = ""
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase === str[i]) {
            res+=str[i].toUpperCase();
        } else {
            res += str[i].toLowerCase();

        }
    }return res;
}
    console.log(flipCasing("HELlo"))
    console.log("HELlo")

