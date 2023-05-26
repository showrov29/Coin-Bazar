const addProduct=(req,res)=>{
    try{

        res.json({
            "message":"product added successfully",
            "success":true
        })
    }
    catch(err){

        console.log(err);
    }

}
const getAll=(req,res)=>{
    try{

        res.json({
           products:['1','2','3','4','5','6','7','8','9'],
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