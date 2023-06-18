const URL = "https://cat-fact.herokuapp.com/facts" // api link
//fetch return promise
const btn = document.querySelector(".btn")
const catFacts = document.querySelector('.cat-facts');

const xhr = new XMLHttpRequest;


//
xhr.onload = function(data){
    console.log(data);
    const res = data.currentTarget.response;

    const Theeksanaam = JSON.parse(res);
    const factsData = Theeksanaam.map((obj) =>{
        return obj.text;
    })

    addDataToList(factsData);
}


// Request rejct hone par kya function chalega
xhr.onerror= function(err){
    console.log(err);
}


//request kha se send karni hai
xhr.open('GET',URL);



btn.addEventListener('click', ()=>{
    xhr.send();
})

function addDataToList(data) {
    data.forEach(obj => {
        const li = document.createElement('li');
        li.innerText = obj;
        catFacts.append(li);
    })
}