const username = document.querySelector(".username")
const password = document.querySelector(".password")
const button = document.querySelector(".btn")


button.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log(e);
    console.log(username.value);
    console.log(password.value);

    username.value = '';
    password.value = '';
})