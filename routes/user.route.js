const express = require("express");
const userController = require("../controllers/user.controller");
const userRouter = express.Router();

userRouter.get("/", userController.getAll);
userRouter.post("/user", userController.createUser);
userRouter.delete("/:id", userController.deleteUser);

module.exports = userRouter;