const express = require("express");
const rolesController = require("../controllers/roles.controller");
const rolesRouter = express.Router();

rolesRouter.get("/", rolesController.getAll);
rolesRouter.post("/", rolesController.createRoles);
rolesRouter.delete("/:id", rolesController.deleteRoles);

module.exports = rolesRouter;