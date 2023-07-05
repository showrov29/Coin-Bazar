const mongoose=require('mongoose')
var uniqueValidator = require('mongoose-unique-validator');

const productSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    team:{
        type:String,
        required:true,
        
    },
    category:{
        type:String,
        required:true,
        
    },
    quantity:{
        type:Number,
        required:true
    },
    review:{
        type:Number,
        default:0
    },
    price:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    profileImage:{
        type:String,
        required:true
    },
    descriptionImage1:{
        type:String,
        default:null
    },
    descriptionImage2:{
        type:String,
        default:null
    },
    descriptionImage3:{
        type:String,
        default:null
    }
})

const Products=mongoose.model('Products',productSchema)
module.exports = Products
productSchema.plugin(uniqueValidator)