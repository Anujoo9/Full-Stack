const form = document.querySelector('form');
const searchResultSection = document.querySelector('#result')

function render(shows){
    for(let entry of shows){
        const image = document.createElement('img');
        image.setAttribute('src',entry.show.image.medium);
        searchResultSection.append(image);
    }
}

function removePreviousResult(){
    while(searchResultSection.firstChild){
        searchResultSection.firstChild.remove();
    }
}

async function fetchShows(showName){
    try{
        const API_URL = `https://api.tvmaze.com/search/shows?q=${showName}`;
        const res = await fetch(API_URL);
        const data = await res.json();
        removePreviousResult();
        render(data);
        console.log(data)

       
    }catch(err){
        document.write('Something wrong')
    }
}


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log("Submit")
    const searchText = form.elements[0].value;
    console.log(searchText)
    fetchShows(searchText)
})