// this will be the starting file of js
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const server_config = require("./config/serverConfig");
const db_config = require("./config/db.config");
const bcrypt = require("bcryptjs");
const user_model = require("./models/user.model");
app.use(express.json())
/**
 * create an admin user at the starting of the application
 * if it is not already present
 */

//connection with Mongodb
mongoose.connect(db_config.DB_URL);
const db = mongoose.connection;

console.log(db);
db.on("error", () => {
  console.log("error while connecting");
});

db.once("open", () => {
  console.log("connected");
  init();
});

async function init() {
        let user = await user_model.findOne({ userId: "admin" });
        if (user) {
          console.log("Admin user already exists");
        }
        try {
          let newUser = new user_model({
            name: "Ayush Bhatt",
            userId: "thepiyush2",
            password: bcrypt.hashSync("13e245",5),
            email: "ta@gmail.com",
            usertype: "ADMIN",
          });
      
          await newUser.save();
          console.log("New user created successfully");
        } catch (err) {
            console.log("Error while saving new user:", err);
        }
      }
      /**
       * stich the route to the server
       */
      require("./router/auth.route")(app)
      

/**
 * start the server
 */
app.listen(server_config.PORT, () => {
  console.log("server is starting at ", server_config.PORT);
});
