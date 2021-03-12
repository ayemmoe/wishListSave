const express = require('express');
const path = require('path');

const productsController = require('../controllers/productController');

const router = express.Router();

console.log(productsController.addProduct);
// if (process.env.NODE_ENV === 'production') {
//     router.get('/', (req, res) => res.status(200).sendFile(path.join(__dirname, '../index.html')));
//   }

router.get('/product',
   productsController.getProduct,    
   (req,res) => res.status(200).json(res.locals.products)
   
)

router.post('/product',
  productsController.addProduct,
  (req,res) => res.status(200).json('Product Added')
)
  
module.exports = router;