


btn.addEventListener('click', () => {
    const inp = document.querySelector('#inp')
    const btn = document.querySelector('#btn')
    const list = document.querySelector('#list')
    const todoText = inp.value;


    if (todoText === "") {
        alert("Empty ToDo")
        return;
    }

    const li = document.createElement('li');
    
    // localStorage.setItem('item',todoText)

    li.innerText = todoText;
    // adding remove todo event
    li.addEventListener('click', () => {
        li.remove();
        // localStorage.removeItem('item')
    })

    list.append(li);

    inp.value = "";

})