const express=require('express');
const app = express();
require('dotenv').config()

const mongoose=require('mongoose');

const dbConnect=()=>{
    mongoose.connect('mongodb://localhost:27017/repliq')
    .then(()=>console.log('Database connected'))
    .catch(err=>console.log('Error connecting'))
}


const userRoute=require('./routes/user.routes')
const productRoute=require('./routes/product.routes')
const orderRoute=require('./routes/order.routes')
const PORT=process.env.PORT

app.use("/user",userRoute)
app.use("/product",productRoute)
app.use("/order",orderRoute)
app.use((req,res)=>{

    res.send('404 not found');
})
app.listen(PORT,(req,res)=>{

   dbConnect();
    console.log('listening on port '+PORT);
})