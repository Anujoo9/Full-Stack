const productRepo = require('../repository/productRepo')


const applyDiscounlOnAllProducts = async(discount) =>{
    const products = await productRepo.findAll();
    const promises = [];
    for(const product of products){
        const newPrice = product.price - products.price*discount/100;
        productRepo.updateProduct(product);
        promises.push(productRepo.upd)
    }
}