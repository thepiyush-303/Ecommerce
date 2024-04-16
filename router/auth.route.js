/**
 * https://localhost:8080/ecomm/api/v1/auth/signup
 * yha pe tu user ko dekhega jb vo sign up krega
 */

const authController = require("../controller/auth.controller")

module.exports = (app)=>{
    app.post("/ecomm/api/v1/auth/signup",authController.signup)
}
