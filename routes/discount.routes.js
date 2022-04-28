const express = require("express");
const discountController = require("../controllers/discount.controller");
const discountRouter = express.Router();

discountRouter.get("/", discountController.getAll);
discountRouter.post("/", discountController.createDiscount);
discountRouter.delete("/:id", discountController.deleteDiscount);

module.exports = discountRouter;