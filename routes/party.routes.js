const express = require("express");
const partyController = require("../controllers/party.controller");
const partyRouter = express.Router();

partyRouter.get("/", partyController.getAll);
partyRouter.post("/", partyController.createParty);
partyRouter.delete("/:id", partyController.deleteParty);

module.exports = partyRouter;