const URL = "https://cat-fact.herokuapp.com/facts" // api link
//fetch return promise
const btn = document.querySelector(".btn")
const catFacts = document.querySelector('.cat-facts')

async function getData(URL) {
    try {
        const res = await fetch(URL);
        const data = await res.json();
        const factsData = data.map((obj) => {
            return obj.text;
        })
        addDataToList(factsData);
    }
    catch (err) {
        console.log(err)
    }
}


function addDataToList(data) {
    data.forEach(obj => {
        const li = document.createElement('li');
        li.innerText = obj;
        catFacts.append(li);
    })
}

function fun() {
    getData()
}

btn.addEventListener('click', () => {
    fun();

})
