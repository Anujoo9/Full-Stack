const fs = require('fs').promises;

const products =  [
    {
        id:1,
        name : 'Iphone',
        des : 'I m Iphone 200',
        price: 100,
        qutantity : 200

    },
    {
        id:2,
        name: 'Mac',
        des : 'I m Mac',
        price : 1000,
        qutantity:50
    },
    {
        id:3,
        name: 'Vision Pro',
        price: 20000,
        qutantity: 60
    }
]


const fileName = 'products.json'

async function main(){
    await fs.writeFile(fileName,JSON.stringify(products))
    console.log("File witten");
}

main()