const express = require('express');
const path = require('path');

const productsController = require('../controllers/productController');

const router = express.Router();

console.log(productsController.deleteProduct);


router.get('/product',
   productsController.getProduct,    
   (req,res) => res.status(200).json(res.locals.products)
   
)

router.post('/product/add',
  productsController.addProduct,
  (req,res) => res.status(200).json('Product Added')
)

router.delete('/product/:id',
productsController.deleteProduct,
  (req,res) => res.status(200).json('Product removed!')
)
  
module.exports = router;