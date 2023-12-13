const mongoose=require('mongoose');

let gunsSchema=new mongoose.Schema({

    name:{
        type:String,
        required:true,
        trim:true
    },
    price:{
        type:Number,
        required:true,
        trim:true
    },
    type:{
        type:String,
        trim:true
    },
    isLegal:{
        type:Boolean,
        required:true,
        trim:true
    },
    img:{
        type:String,
        required:true,
        trim:true
    },
    reviews:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'Review'
        }
    ]

})

let Guns=mongoose.model('Guns',gunsSchema)

module.exports=Guns;