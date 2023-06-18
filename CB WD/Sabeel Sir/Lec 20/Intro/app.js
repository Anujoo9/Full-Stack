
console.log('Start')

function fetchData(callback) {

    setTimeout(() => {
        const data = [{
            name: 'Iphone',
            price: 100
        },
        {
            name: 'Mac',
            price: 300
        }
        ]
        const err = null;
        callback(data, err);
    }, 3000);
}


fetchData(function (data, err) {
    if (err) {
        throw new Error('Can"t fetch Data !')
    }
    console.log(data);
})

fun();
console.log("End")

function fun (){
    console.log('Indside Fun')
}