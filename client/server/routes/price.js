const express = require("express");
const controller = require("../controllers/controller")


const priceRouter = express.Router();


priceRouter.get("/prices", controller.getPrice) 



module.exports = priceRouter;