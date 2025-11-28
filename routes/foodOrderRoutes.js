const express = require("express");
const getFoodOrder = require("../controllers/foodOrder/getFoodOrder");
const createFoodOrder = require("../controllers/foodOrder/createFoodOrder");
const deleteFoodOrder = require("../controllers/foodOrder/deleteFoodOrder");
const putFoodOrder = require("../controllers/foodOrder/putFoodOrder");

const foodOrderRouter = express.Router();

foodOrderRouter.get("/", getFoodOrder);

foodOrderRouter.put("/", putFoodOrder);

foodOrderRouter.delete("/", deleteFoodOrder);

foodOrderRouter.post("/", createFoodOrder);

module.exports = foodOrderRouter;
