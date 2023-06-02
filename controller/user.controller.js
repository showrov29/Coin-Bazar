const {randomUUID} = require('crypto');
const {transporter,send}=require('../email')
const Users=require('../model/user.model');


  const  register= async (req,res)=>{

  const x=randomUUID()
  const newUser = new Users(
    req.body
  )

  newUser.save()
  .then(user=>{
    send("http://localhost:3000/user/verify"+x,"Verify Your Email",req.body.email)
  })
  .catch(error=>{
    res.status(500)
    res.send(error)
  })

  
    }
 
    
    
    const login = async (req,res)=>{

   try{ 
    const user= await  Users.findOne({ email: req.body.email})

    if (user) {
      if (user.varified==true) {
      
      
      }
      else{
        res.json({
          message:"Your Email is not varified yet"
        })
      }
    }
    else{
      res.json({
        message:"No Account is registered for this email"
      })
    }
  }

    catch(err){
    console.log(err);
    }
    }




    const forgetPassword = (req,res)=>{
      //todo; find a user with provided email
      
      function generateRandomNumber() {
        var min = 1000; // minimum value (inclusive)
        var max = 9999; // maximum value (inclusive)
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      var randomNumber = generateRandomNumber();
      send(randomNumber,"Verify Your Email",req.body.email)
      
      res.json({
        code:randomNumber
      })
      //todo: send an email with the random number


    }
    const changePassword = (req,res)=>{
      


    }


    const verifyUser = (req,res)=>{

        const date=new Date()
        
       res.json({
        success:true,
        token:req.params.token

       })
    }





module.exports={register,login,verifyUser,forgetPassword,changePassword}