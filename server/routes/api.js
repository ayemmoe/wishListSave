const express = require('express');
const path = require('path');

const productsController = require('../controllers/productController');
const usersController = require('../controllers/usersController');

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
  
router.post('/user/add',
   usersController.createAccount,
   (req,res) => res.status(200).json('User Created!')
)

router.post('/user/verify',
    usersController.verifyUser,
    (req,res) => {
      console.log('res.locals.authenticated',res.locals.authenticated);
      if(res.locals.authenticated){
      res.status(200).redirect('/');
      }
    }
)

module.exports = router;