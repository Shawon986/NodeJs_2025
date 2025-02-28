const express = require('express');
const productsRouter = express.Router();
const productService = require('./service/productService');



 

productsRouter.get('/api/products', (req,res)=>{
    res.send(productService.getAllProducts());
});



productsRouter.post('/api/products', (req,res)=>{

    res.status(201).json(productService.createNewProduct(req.body));
});

productsRouter.put('/api/products/:id', (req,res)=>{
    const {id} = req.params;
    const updatedProduct = productService.updateProduct(id,req.body);
    res.status(201).json(updatedProduct);
    
});

productsRouter.delete('/api/products/:id', (req,res)=>{
    const {id} = req.params;
    let updatedProductIndex = products.findIndex((products)=> products._id == id);
    if(updatedProductIndex === -1){
        return res.status(400).json({message:`No product found by id ${id}`})
    }
    products.splice(updatedProductIndex,1);
    res.status(201).json({message:"Product deleted successfully"});
})

module.exports = productsRouter;