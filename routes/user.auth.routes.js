const express = require("express");
const authController = require("../controllers/user.auth.controller");
const authRouter = express.Router();

authRouter.get("/:Login", authController.getOne);

module.exports = authRouter;