const { Router } = require("express");
const { preordersController } = require("../controllers");

const preordersRouter = Router();

preordersRouter.route("/").get(preordersController.getPreorders);

module.exports = preordersRouter;
