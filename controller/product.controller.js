const Products=require('../model/product.model')

const addProduct=(req,res)=>{
    try{
       
        const product={
            name:req.body.name,
            quantity:req.body.quantity,
            price:req.body.price,
            productCode:req.body.productCode,
            description:req.body.description,
            profileImage:req.files[0].filename,
            
            // descriptionImage2:req.files[2].filename || null,
            // descriptionImage3:req.files[3].filename || null
        }
        if (req.files[1]) {
           product.descriptionImage1=req.files[1].filename 
        }
 
        if (req.files[2]){
            product.descriptionImage2=req.files[2].filename 
        }
        if (req.files[3]){
            product.descriptionImage3=req.files[3].filename 
        }

        const newProduct=new Products(product)
        newProduct.save()
        .then(product =>{
            
            res.json({
                message:"Product added successfully",
                success:true
            })
        })
        .catch(err =>{
            console.log(err);
        })
       
    }
    catch(err){

        console.log(err);
    }

}
const getAll= async(req,res)=>{
    try{

        const products=await Products.find()

        res.json({
           products:products,
            success:true
        })
    }
    catch(err){

        console.log(err);
    }

    

}
const getProductById=(req,res)=>{
    try{

        res.json({
            "product":{
                "id":req.params.id,
                "name":"demo"
            },
           
        })
    }
    catch(err){

        console.log(err);
    }

}
const editProduct=(req,res)=>{
    try{

        res.json({
            "product":{
                "id":req.params.id,
                "name":"demo"
            },
            "success":true
           
        })
    }
    catch(err){

        console.log(err);
    }

}
const deleteProduct=(req,res)=>{
    try{

        res.json({
            "product":{
                "id":req.params.id,
              
            },
            "message":"delete product successfully",
            "success":true
           
        })
    }
    catch(err){

        console.log(err);
    }

}

module.exports ={editProduct,deleteProduct,getAll,getProductById,addProduct}