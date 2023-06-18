const URL = "https://cat-fact.herokuapp.com/facts" // api link
//fetch return promise
const btn = document.querySelector(".btn")
const catFacts = document.querySelector('.cat-facts')
btn.addEventListener('click', ()=> {
    fetch(URL)
        .then((res)=>{
           
            return res.json();

        }).then((data) => {
            data.forEach(obj => {
                // console.log(obj.text);
                const li = document.createElement('li');
                li.innerText = text;
                catFacts.append(li);

            })
        })
        .catch(err => console.log(err))
})
