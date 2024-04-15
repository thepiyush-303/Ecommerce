// this will be the starting file of js
const express = require("express")
const mongoose = require("mongoose")
const app = express()
const server_config = require("./config/serverConfig")
const db_config = require("./config/db.config")
const bcrypt = require("bcryptjs")
const user_model = require("./models/user.model")
/**
 * create an admin user at the starting of the application
 * if it is not already present
 */

//connection with Mongodb
mongoose.connect(db_config.DB_URL)
const db = mongoose.connection
db.on("error",()=>{
        console.log("error while connecting")
})

db.once("open",()=>{
        console.log("connected")
        init()
})

async function init(){
        let user = await user_model.findOne({userId : "admin"})
        if(user){
                console.log("Admin is already present",user)
                return
        }
        try{
                user = await user_model.create({
                        name: "Arun Kumar",
                        userId: "admin",
                        email: "jellysabha@gmail.com",
                        userType: "COUSTMER",
                        password: bcrypt.hashSync("Hellllo5",9)
                })
                console.log("admin is created",user)
        }catch(err){
                console.log("error while create admin",err)
        }
}
/**
 * start the server
 */
app.listen(server_config.PORT,()=>{
        console.log("server is starting at ",server_config.PORT)
})

