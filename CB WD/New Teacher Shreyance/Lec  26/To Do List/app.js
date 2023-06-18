// const inp = $('#inp');
// const btn = $('#btn');
// const taskList = $('.task-list')

// console.log(btn)

// let tasks = []

// btn.on('click', (e)=>{
//     tasks.push(inp.val);
//     console.log(inp.val())
//     inp.val('');
//     addTaskToList(tasks);
// })

// function addTaskToList(data){
//     const newItem = $('div');
//     newItem.attr('class','item');
//     let str =  `<div class="section-A">
//                         <input class="checkbox" type="checkbox">
//                         <li class="text">${data.pop()}</li>
//                     </div>
    
//                     <div class="section-B">
//                         <span class="up-arrow">🔼</span>
//                         <span class="bin">🗑️</span>
//                         <span class="down-arrow">🔽</span>
//                     </div>`
//     newItem.html(str) ;
//     taskList.append(newItem);

//     console.log(newItem);
// }
// taskList.on('click',(e) =>{
//     const element = e.target.getAttribute('class');
//     if(element === 'checkbox'){
//         $(e.target).next().toggleClass('check');
//     }
//     if(element === 'up-arrow'){
//         const currElement = $(e.target).parent().parent();
//         const prevElement = currElement.$(e.target.previousElementSibling);
//     }

// })
///////////////////////////////////////////////////
const inp = $('.inp');
const btn = $('.btn');
const taskList = $('.task-list');

let tasks = [];

btn.on('click', (e)=>{
    tasks.push(inp.val());
    inp.val('');
    addTaskToList(tasks);
})

function addTaskToList(data){
    const newItem = $('<div></div>');
    newItem.addClass('item');

    let str = `<div class="section-A">
                    <input class="checkbox" type="checkbox">
                    <li class="text">${data.pop()}</li>
                </div>

                <div class="section-B">
                    <span class="up-arrow">🔼</span>
                    <span class="bin">🗑️</span>
                    <span class="down-arrow">🔽</span>
                </div>`
    newItem.html(str);
    taskList.append(newItem);

    console.log(newItem)
}

taskList.on('click', (e)=>{
    const element = e.target.getAttribute('class');
    console.log();
    if(element === 'checkbox'){
        e.target.nextElementSibling.classList.toggle('check');
    }

    if(element === 'up-arrow'){
        const currElement = e.target.parentElement.parentElement;
        const prevElement = currElement.previousElementSibling;

        prevElement.before(currElement);
    }
})


