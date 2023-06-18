const req = new XMLHttpRequest();

const cardImg = document.querySelector('.card-img-top');
const cardPrice = document.querySelector('.card-price');
const cardTitle = document.querySelector('.card-title');
const cardDesc = document.querySelector('.card-text');

req.onload = function(){
    const res = this.responseText;
    const data = JSON.parse(res);
    cardImg.setAttribute ('set',data.image);
    cardPrice.textContent = data.price;
    cardDesc.textContent = data.description;
    cardTitle.textContent = data.title;
}

req.onerror = function(){
    console.log(this)
}

req.open('GET','https://fakestoreapi.com/products/1')
req.send()