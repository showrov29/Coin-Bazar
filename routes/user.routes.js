
const express=require('express');
const router=express.Router();
var bodyParser = require('body-parser')
const Middleware=require('../middleware/hashpassword.middleware')
var urlencodedParser = bodyParser.urlencoded({ extended: false })
const UserController = require('../controller/user.controller')


router.use(bodyParser.json());
router.use(urlencodedParser)
router.post('/register',Middleware.hashPass,UserController.register)
router.post('/login',UserController.login)
router.get('/:token',UserController.verifyUser)
router.post('/forgot',UserController.forgetPassword)
router.post('/changepassword',UserController.changePassword)
module.exports=router;