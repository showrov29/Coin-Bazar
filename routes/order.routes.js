const express=require('express');
const router=express.Router();
const OrderController=require('../controller/order.controller')

router.use(express.json());
router.post('/api/add', OrderController.addOrder)
router.get('/api/all', OrderController.getAll)
router.get('/api/:id', OrderController.getOrderById)
router.put('/api/:id', OrderController.editOrder)
router.delete('/api/:id', OrderController.deleteOrder)

module.exports=router;