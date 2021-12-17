require('dotenv').config()

const express =require("express");
const app=express();
const mongoose=require("mongoose");


mongoose.connect(process.env.DATABASE_URL)
const db=mongoose.connection
db.once('open',()=>console.log("connected "))
db.on('error1',(error)=>console.error(error))
app.use(express.json())
const subscriberRouter=require('./routes/subscribers')
app.use('/subscribers',subscriberRouter)

app.listen(3001,()=>{
    console.log("Server is running on port 3001")
});
