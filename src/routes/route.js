const express = require('express');
const router = express.Router();
const UserController = require("../Controllers/UserController")
const Middleware= require("../Middlewares/Auth")



router.post("/user-signUp",UserController.CreateUser)
router.post("/user-login",UserController.loginUser)
router.get("/get-user/:id",Middleware.authentication,UserController.getUserById)
router.get("/get-user",Middleware.authentication,UserController.getUserByQuery)
router.get("/get-all-user",Middleware.authentication,UserController.getAllUser)
router.patch("/update-user/:id",Middleware.authentication,UserController.updateUser)
router.delete("/delete-user/:id",Middleware.authentication,UserController.deleteUser)





module.exports=router;