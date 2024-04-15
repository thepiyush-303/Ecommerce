const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
name:{
    type:String,
    required:true,
},
userId:{
    type:String,
    required:true,
    unique:true,    
},  
password:{
    type:String,
    required:true
},
email:{
    type:String,
    required:true,
    lowercase:true,
    minlength:10,
    unique:true,
},
usertype:{
    type:String,
    required:true,
    default:"COUSTMER",
    enum:["COUSTMER","ADMIN"]
}
},{timestamps:true,versionKey:false})
module.exports = mongoose.model("User",userSchema)