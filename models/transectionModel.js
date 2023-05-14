const mongoose=require('mongoose')
const transectionSchema=new mongoose.Schema({
   userid:{
    type:String,
    required:true
     },
    amount:{
        type:Number,
        required:[true,"amount is required"]
    },
    type:{
     type:String,
     required:[true,"type is required"]
    },
    category:{
      type:String,
      requires:[true,' category is required']
    },
    refrence:{
        type:String,
    },
    description:{
        type:String,
        required:[true,"Description is required"]
    },
    date:{
        type:Date,
        required:[true,"date is required"]
    }
},{timeseries:true})
const transactionModel=mongoose.model('transection',transectionSchema)
module.exports=transactionModel