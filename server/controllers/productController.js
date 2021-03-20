const Product = require('../Models/productModel.js');
const productsController = {};

productsController.getProduct = (req, res, next) => {
    console.log('inside get product',req.query)
    Product.find(req.query)
    .then(data => {        
        res.locals.products = data;
        //console.log(data);

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
    //console.log(req.)
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

productsController.deleteProduct = (req, res, next) => {
    Product.deleteOne(req.body)
    .then(data => {
        console.log(data);
        next()
    })
    .catch(err => {
        next({
            log : `productController.deleteProduct: ERROR :${err}`,
            message : { err : ' Error occurred in productController.deleteProduct'}
            })
    })
}

console.log(productsController.deleteProduct)
    

module.exports = productsController;