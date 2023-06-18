
class PizzaStore {
    static pizzas = [
        {
            id: 999,
            name: 'Cheeze Pizza',
            price: 100,
        },
        {
            id: 888,
            name: 'Chicken Pizza',
            price: 120,
        },
        {
            id: 777,
            name: 'Paneer Pizza',
            price: 110,
        }
    ];

    static getAllPizzas() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.pizzas);
            }, 2000);
        })
    }

    static applyDiscountOnPizza(ID, discount) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const foundPizza = this.pizzas.find((pizza) => pizza.id === ID);
                foundPizza.price = foundPizza.price - (foundPizza.price - discount * foundPizza.price / 100);
                resolve(foundPizza);
            }, 3000);
        })
    }

    //Anuj code written in series format which will hamper performance
    // static async applyDiscountOnBulkPizza(...ids){
    //     const list = []
    //     for( const id of ids){
    //      this.applyDiscountOnPizza(id,50).then((data) =>{
    //         list.push(data.price)
    //      })
    //     }
    //     console.log("Worked !!")
    //     return list;
    // }

    //Sir code written in parallel format
    static async applyDiscountOnBulkPizza(...pizzaIds) {
        const list = [];
        for (let id of pizzaIds) {
            const pizza = this.applyDiscountOnPizza(id, 50);
            list.push(pizza);
        }
        return await Promise.allSettled(list);
    }

    static performPayment(orderId, amount) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const TxnId = "TXN" + Math.floor(Math.random() * 100000);
                if (this.walletAmount >= amount) {
                    this.walletAmount = this.walletAmount - amount;
                    resolve(TxnId, orderId);
                } else {
                    reject('Insuffiencent Balance!')
                }

            }, 1000);
        })
    }

    static sendEmailNotification(email) {
        return new Promise((resolve, reject) => {
            resolve(`Email Send to ${email} for the OrderId ${orderId}`);
        }, 1000);
    }

    static createPizzaOrder(OrderReq) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const OrderId = "ORD" + + Math.floor(Math.random() * 10000);
                const totalAmount = OrderReq.pizzas.reduce((total, pizza) => total + pizza.price * pizza.qty, 0);
                resolve({ OrderId, OrderReq, totalAmount });
            }, 1000);
        })
    }

    static orderPlaced(){
        
    }
}


async function main() {
    const allPizzas = await PizzaStore.getAllPizzas();
    console.table(allPizzas);
    // const updatedPizza = await PizzaStore.applyDiscountOnPizza(999,50);

    // console.log(updatedPizza);

    // const allPizzas1 = await PizzaStore.getAllPizzas();
    // console.table(allPizzas1);

    console.time('Timer');
    const bulkPizzaList = await PizzaStore.applyDiscountOnBulkPizza(999, 888);
    console.table(bulkPizzaList)
    console.timeEnd("Timer");

    const ordeRequest = {
        pizzas: [
            { id: 999, price: 100, qty: 2 },
            { id: 888, price: 300, qty: 100 }
        ]
    };

    const order = await PizzaStore.createPizzaOrder(ordeRequest);
    console.log(order);
}


main();