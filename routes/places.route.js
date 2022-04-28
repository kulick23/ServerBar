const express = require("express");
const placesController = require("../controllers/places.controller");
const rolesRouter = express.Router();

rolesRouter.get("/", placesController.getAll);
rolesRouter.post("/", placesController.createPlaces);
rolesRouter.delete("/:id", placesController.deletePlaces);

module.exports = rolesRouter;