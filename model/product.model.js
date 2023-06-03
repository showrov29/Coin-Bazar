const mongoose=require('mongoose')
var uniqueValidator = require('mongoose-unique-validator');

const productSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    productCode:{
        type:Number,
        required:true,
        unique:true

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