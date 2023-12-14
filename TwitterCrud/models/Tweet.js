const mongoose=require('mongoose');

let gunsSchema=new mongoose.Schema({

    tweetContent:{
        type:String,
        required:true,
        trim:true
    },
    userName:{
        type:String,
        required:true,
        trim:true
    },
    followers:{
        type:Number,
        trim:true
    },
    following:{
        type:Number,
        trim:true
    },
    reviews:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'Review'
        }
    ]
},
    
    {timestamps:true});

let Guns=mongoose.model('Guns',gunsSchema)

module.exports=Guns;