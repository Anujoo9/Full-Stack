const obj = {
    first_name : "Sallu",
    Last_name : "Bhai",
    movies : [
        "tiger","wanted"
    ]
    ,
    age : 65,
    getAge:()=>{
        return age;
    }

}
const stringObj = JSON.stringify(obj)
const parseObj = JSON.parse(stringObj);

console.log(parseObj)