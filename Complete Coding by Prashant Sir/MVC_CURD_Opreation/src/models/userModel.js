const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    name:{
        required:true,
        type:String
    },
     schoolName:{
        required:true,
        type:String
     }
},{timestamps:true})



const User = mongoose.model('User', userSchema);


module.exports = User;


