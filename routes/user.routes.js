
const express=require('express');
const router=express.Router();
var bodyParser = require('body-parser')
const UserController = require('../controller/user.controller')

router.use(bodyParser.urlencoded({ extended: false }))
router.post('/register',UserController.register)
router.post('/login',UserController.login)

module.exports=router;