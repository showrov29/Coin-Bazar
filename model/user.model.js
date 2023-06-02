const mongoose = require('mongoose');


const userSchema= mongoose.Schema({
    name: String,
    email: {
        type: String,
        unique: true,
    },
    phone: String,
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