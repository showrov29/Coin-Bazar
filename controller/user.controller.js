const {randomUUID} = require('crypto');
const {transporter,send}=require('../eamil')

   const  register=(req,res)=>{

  const x=randomUUID()
  console.log(x);
  send(x,"verify",req.body.email)

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