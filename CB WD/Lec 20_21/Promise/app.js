
function mainCourse() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("MainCourse")
            resolve();
        }, 3000);
    })

}

function Sweets() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Sweets")
            resolve();
        }, 2000);
    })
};

function Drinks() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Drinks")
            resolve();
        }, 2000);
    })
};


mainCourse().then(Sweets).then(Drinks).catch((err) => { console.log(err) });