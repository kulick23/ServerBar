const express = require("express");
const orderController = require("../controllers/order.controller");
const orderRouter = express.Router();

orderRouter.get("/", orderController.getAll);
orderRouter.post("/", orderController.createOrder);
orderRouter.delete("/:id", orderController.deleteOrder);

module.exports = orderRouter;