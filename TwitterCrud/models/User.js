const mongoose = require('mongoose');
const passportLocalMongoose=require('passport-local-mongoose');

let userSchema = new mongoose.Schema({
   gender:{
    type:String,
    trim:true,
    require:true,
   },
   address:{
    type:String,
    trim:true,
    require:true,
   } 
},
{timestamps:true});


userSchema.plugin(passportLocalMongoose);



let User = mongoose.model('User' , userSchema )
module.exports = User; 

