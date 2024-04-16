/**
 * i need to write the controller / logic to register a user
 */
//here client will req and controller will give the response
const bcrypt = require("bcryptjs")
const user_model = require("../models/user.model")
exports.signup = async (req,res)=>{
    /**
     * write "logic"*/
     // 1.read the requset body
    const request_body = req.body
    //  * insert the data in data /user collection in mongodb
    const userObj = {
        name: request_body.name,
        email: request_body.email,
        userId:request_body.userId,
        password: request_body.password,
        usertype: request_body.usertype
    }
    try{
        const new_user = await user_model.create(userObj)
        res.status(201).send(user_created) //status for indicating that user is successfully stored
    }catch(err){
        console.log("error",err)
        res.status(500).send(message)({
            message:"Something wrong happened with the server"
        })
    }
    //  * return the responce back to user
}