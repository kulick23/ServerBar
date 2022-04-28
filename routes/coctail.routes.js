const express = require("express");
const coctailController = require("../controllers/coctail.controller");
const coctailRouter = express.Router();

coctailRouter.get("/", coctailController.getAll);
coctailRouter.post("/", coctailController.createCoctail);
coctailRouter.delete("/:id", coctailController.deleteCoctail);

module.exports = coctailRouter;