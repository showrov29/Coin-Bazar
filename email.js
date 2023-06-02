const { text } = require('body-parser');
const { model } = require('mongoose');
const nodemailer=require('nodemailer')
require('dotenv').config()

var transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.Email_PORT,
    ignoreTLS: true,
    secure: true,
    auth: {
      user: process.env.EAMIL_USER,
      pass: process.env.EMAIL_PASSWORD
    }
  });
  
function send(body,subject,sendTo){
    
    var mailOptions = {
       
        to:sendTo,
        subject:subject ,
        text:body
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