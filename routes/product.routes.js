const express=require('express');
const router=express.Router();
const ProductController = require('../controller/product.controller')

router.use(express.json());
router.post('/api/add', ProductController.addProduct)
router.get('/api/all', ProductController.getAll)
router.get('/api/:id', ProductController.getProductById)
router.put('/api/:id', ProductController.editProduct)
router.delete('/api/:id', ProductController.deleteProduct)

module.exports=router;