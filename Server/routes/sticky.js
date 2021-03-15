var express = require('express')
var router  = express.Router()
var sticky = require('../schema/notes')

router.post('/addSticky',async(req,res)=>{
    try{
    var newSticky = new sticky(req.body);
    await newSticky.save();
    res.send({success:"new sticky added !!!"})
    }catch(error){
        res.send({error:error})
    }
})

router.get('/allSticky',async(req,res)=>{
    try{
    var allSticky = await sticky.find({})
    res.send(allSticky)
    }catch(error){
        res.send({error:error})
    }
})

router.delete('/deleteSticky/:id',async(req,res)=>{
    console.log(req.params)
    var deleteSticky = await sticky.findByIdAndDelete({_id: req.params.id})
    res.send({success:'successfully deleted Sticky Note'})
})

router.patch('/updateSticky/:id',async(req,res)=>{

    var updateSticky = await sticky.findByIdAndUpdate({_id:req.params.id},{$set:{
        createdBy:req.body.createdBy,
        note:req.body.note
    }},{new:true})
    await updateSticky.save()
    res.send({success:updateSticky})

})

router.patch('/incrementLikes/:id',async(req,res)=>{

    var updateSticky = await sticky.findByIdAndUpdate({_id:req.params.id},{$inc:{
        'likes':1
    }},{new:true})
    await updateSticky.save()
    res.send({success:updateSticky})

})

module.exports=router
