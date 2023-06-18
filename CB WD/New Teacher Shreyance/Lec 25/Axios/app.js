const URL = "https://cat-fact.herokuapp.com/facts" 

const btn = document.querySelector(".btn")
const catFacts = document.querySelector('.cat-facts');

const xhr = new XMLHttpRequest;

function getData(URL){
    return new Promise((resolve,reject) => {
            axios.get(URL)
            .then((res) =>{
                resolve(res.data);
            })
            .catch(err => console.log(err));
    })
}

function addDataToList(data){
    data.forEach(obj =>{
        const li = document.createElement('li');
        li.innerTExt = obj;
        catFacts.append(li);
    })
}

async function fun(){
    getData(URL)
    .then(data => {
        const factData = data.map((obj) => {
            return obj.text;
        })
    })
    .catch()
}

btn.addEventListener('click',()=> {
    fun();
})