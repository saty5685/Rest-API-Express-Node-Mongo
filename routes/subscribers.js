const express=require('express')
const router=express.Router()
const Subscriber=require('../models/Subscribers')
//getting all subscribers
router.get('/',async (req,res)=>{
    try{
    const subscribers=await Subscriber.find()
    res.send(subscribers)

    }
    catch(err){
   res.status(500).json({message:err.message})
    }
})
//getting One subscriber
router.get('/:id',async (req,res)=>{
    try{
    const subscriber=await Subscriber.findById(req.params.id)
    res.send(subscriber)

    }
    catch(err){
   res.status(400).json(err)
    }
})
//Creating a  subscriber
router.post('/', async (req,res)=>{
    const nsb=new Subscriber({
        name :req.body.name,
        subscribedToChannel : req.body.subscribedToChannel
    })
    try{
        const newnsb=await nsb.save()
        res.status(201).json(newnsb)
    }
    catch(err){
     res.status(400).json(err)
    }
   
    
})
//updating a subscriber
//deleting a subscriber




module.exports=router 