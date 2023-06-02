
const express=require('express');
const router=express.Router();
var bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false })
const UserController = require('../controller/user.controller')

router.use(bodyParser.json());
router.use(urlencodedParser)
router.post('/register',UserController.register)
router.post('/login',UserController.login)
router.get('/:token',UserController.verifyUser)

module.exports=router;