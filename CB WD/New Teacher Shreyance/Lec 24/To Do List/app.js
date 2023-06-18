const inp = document.querySelector('.inp');
const btn = document.querySelector('.button')

const taskList = document.querySelector('.task-list')


let task = [];

btn.addEventListener('click', (e) => {
    // console.log(inp.value);
    task.push(inp.value);
    inp.value = '';
    addTaskToList(task)
})


function addTaskToList(data) {
    const newtaskList = document.createElement('div');
    newtaskList.setAttribute('class', 'item');
    // console.log(newtaskList);
    // console.log(data.pop());
    let str = ` <div class="section-A">
                        <input class="checkbox" type="checkbox">
                        <li class='text'>${data.pop()}</li>
                    </div>
                    <div class="section-B">
                        <span class="up-arrow">⬆️</span>
                        <span class="bin">🗑️</span>
                        <span class="down-arrow">⬇️</span>
                    </div>`


    newtaskList.innerHTML = str;
    taskList.append(newtaskList);
    // console.log(newtaskList);
    // console.log(taskList.innerHTML)

}

taskList.addEventListener('click', (e) => {
    const element = e.target.getAttribute('class');

    if (element === 'checkbox') {
        console.log(e.target.nextElementSibling)
        e.target.nextElementSibling.classList.toggle('check');
    }
    if (element === 'up-arrow') {
        const curr = e.target.parentElement.parentElement
        if (curr != null) {
            const prev = curr.previousElementSibling
            prev.before(curr);
        }
        // console.log(curr)
        // console.log(prev)
    }
    if (element === 'down-arrow') {
        const curr = e.target.parentElement.parentElement;
        if (curr != null) {
            const next = curr.nextElementSibling;
            next.after(curr);
        }
    }
    if (element === 'bin') {
        e.target.parentElement.parentElement.remove()
    }
})