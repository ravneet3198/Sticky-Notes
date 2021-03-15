const mongoose = require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/sticky",{useCreateIndex:true,useNewUrlParser:true},(err,client)=>{
    if(err){
        console.log(err)
    }else{
        console.log("connected to db")
    }
    
})