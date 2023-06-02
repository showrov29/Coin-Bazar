const mongoose = require('mongoose');


const userSchema= mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email: {
        type: String,
        unique: true,
        required:true
    },
    password: {
        type: String,
      
        required:true
    },
    phone: {
        type: String,
        required:true

    },
    verificationCode:'UUID',
    varified:{
        type:Boolean,
        default: false,
    },
    varifiedAt:{
        type:Date,
        default:null,

    }
}) 

const Users=mongoose.model('Users',userSchema)

module.exports=Users