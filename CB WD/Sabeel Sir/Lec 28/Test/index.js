const express = require('express');

const productRepo = require('./productRepo');

const app = express();

app.get('/products',async(req,res)=>{
  try { const products = await productRepo.readFile();
    res.json(products)}
    catch(err){
        console.log(err)
    }
})
app.get('/products/:id',async(req,res)=>{
    const {productid} = req.params; //query parameter are not compulsory(optional) ,, path parameter is essential
    const product = await productRepo.findProductById(productid);
    res.json(product);

})
app.patch('/products/:productid',async(req,res)=>{
    const {productid} = req.params;
    const updatedProduct = await productRepo.updateProduct(productid,{price:40000});
    res.json(updatedProduct)
})


app.listen(3000,()=>{
    console.log(`Server fired at 3000 port`)
})