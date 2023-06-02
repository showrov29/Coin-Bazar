const {randomUUID} = require('crypto');
const {transporter,send}=require('../email')
const Users=require('../model/user.model')

  const  register= async (req,res)=>{

  const x=randomUUID()
  const newUser = new Users(
    req.body
  )

  newUser.save()
  .then(user=>{
    send(x,"Verify Your Email",req.body.email)
  })
  .catch(error=>{
    res.status(500)
    res.send(error)
  })

  
    }
 
    
    const login = (req,res)=>{
        res.send(req.body)
    }
    const verifyUser = (req,res)=>{

        const date=new Date()
        
       res.json({
        success:true,
        token:req.params.token

       })
    }





module.exports={register,login,verifyUser}