// window.document
// window
// console.dir(document)

// document.getElementsByTagName('h1')


//h1.style

//select
const h1 = document.getElementsByTagName('h1')[0];
// let x = h1.innerText
// x = h1.innerText + " Hello"
// h1.innerText = x
h1.innerHTML = "<em>Hello<em>" // its tag em = emphasis tag

// Manupulate

// h1.style.color = 'red'
// h1.style.border = "2px solid red"
// h1.style.backgroundColor = "black"


// const para = document.querySelector('p')
// console.log(para);
// console.log(para.innerText)    // show what user sees
// console.log(para.innerHTML)  // show all with tags
// console.log(para.textContent)  // show hidden things too but not the tags

// h1.setAttribute('class','two');
// h1.classList.add('two'); //-- better way
// h1.classList.add('two'); //-- better way
// h1.classList.remove('two'); //-- better way
// h1.classList.replace('one','two'); //-- better way
// h1.classList.contains('one'); //-- better way


// h1.classList.toggle('one'); //-- better way

// const kuchbi = document.querySelector('ul li:last-child')
// console.log(`Parent ${kuchbi.parentElement}`)
// console.log(`Parent ka Paren ${kuchbi.parentElement.parentElement}`)
// console.log(`Next Element Sibling ${kuchbi.nextElementSibling}`)
// console.log(`Previous element sibling ${kuchbi.previousElementSibling}`)
// console.log(`Childern ${kuchbi.children}`)


const span = document.createElement('span')
span.setAttribute('id', 'speical-id')


const li = document.createElement('li');
li.innerText = 'Ironman X'

const ul = document.querySelector('ul');
ul.append(li) // can append text and elements
// ul.append("fun") // can append text and elements
// ul.appendChild(li) // only append element


