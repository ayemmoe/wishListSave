const Product = require('../Models/productModel.js');
const fs = require('fs');
const productsController = {};

productsController.getProduct = (req, res, next) => {
    Product.find({})
    .then(data => {
        res.locals.products = data;
        console.log(data);

        next();
    })
    .catch ( err => {
        next({
            log: `productsController.getProduct: ERROR :${err}`,
            message: {err : 'Error occurred in productsController.getProdct'}
        })
    })
}

productsController.addProduct = (req, res, next) => {
    
    const newProduct = {
        title:'Toaster',
        price: 100,
        image: "https://m.media-amazon.com/images/I/71rCwRiD8SL._AC_UY218_.jpg",
        person: 'Mom',
        store: 'Amazon'
    };
    console.log("req.bod",req.body);
    Product.create(req.body)
    .then(data => {
        console.log(data);
        next();
    })
    .catch( err => {
        next({
            log : `productController.addProduct: ERROR :${err}`,
            message : { err : ' Error occurred in productController.addProduct'}
          })
    })



    
}

module.exports = productsController;