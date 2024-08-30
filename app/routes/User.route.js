const express = require("express")

const userRouter = express.Router()

const {getAllUsers, createUser, loginUser, getUserByUsername, deleteUser} = require("../controllers/User.controller")

userRouter.get("/", getAllUsers)

userRouter.get("/:username", getUserByUsername)

userRouter.delete("/:username", deleteUser)

userRouter.post("/register", createUser)

userRouter.post("/login", loginUser)

module.exports = userRouter;