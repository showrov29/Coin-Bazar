const { text } = require('body-parser');
const { model } = require('mongoose');
const nodemailer=require('nodemailer')

var transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    ignoreTLS: true,
    secure: true,
    auth: {
      user: "abcdhealthcare24@gmail.com",
      pass: "edmhnqgrzwkdyfik"
    }
  });
  
function send(body,subject,sendTo){
    
    var mailOptions = {
       
        to:sendTo,
        subject:subject ,
        text:"http://localhost:3000/user/verify"+body
      };
      
      transport.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
    
        
}




module.exports={transport,send}