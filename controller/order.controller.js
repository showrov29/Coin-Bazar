const Orders=require("../model/order.model")
const addOrder=(req,res)=>{
    try{

        let newOrder=new Orders(
            req.body
        )
        newOrder.save()

        res.json({
            "message":"Order added successfully",
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
           Order:['1','2','3','4','5','6','7','8','9'],
            success:true
        })
    }
    catch(err){

        console.log(err);
    }

    

}


const  getPendingOrder=(res,req)=>{
    try{

        res.json({
            success:true,
            orders:[]
        })
    }
    catch(err){
        console.log(err);
    }
}
const getOrderById=(req,res)=>{
    try{

        res.json({
            "Order":{
                "id":req.params.id,
                "name":"demo"
            },
           
        })
    }
    catch(err){

        console.log(err);
    }

}
const editOrder=(req,res)=>{
    try{

        res.json({
            "Order":{
                "id":req.params.id,
                "name":"demo"
            },
            "success":true
           
        })
    }
    catch(err){

        res.send(err)
    }

}
const deleteOrder=(req,res)=>{
    try{

        res.json({
            "Order":{
                "id":req.params.id,
              
            },
            "message":"delete Order successfully",
            "success":true
           
        })
    }
    catch(err){

        console.log(err);
    }

}

module.exports ={getAll,getOrderById,deleteOrder,editOrder,addOrder}