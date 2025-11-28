const express = require("express");
const getFood = require("../controllers/food/getFood");
const createFood = require("../controllers/food/createFood");
const deleteFood = require("../controllers/food/deleteFood");
const putFood = require("../controllers/food/putFood");
const getFoodList = require("../controllers/food/getFoodList");

const foodRouter = express.Router();

foodRouter.get("/", getFood);

foodRouter.get("/:id", getFoodList);

foodRouter.put("/", putFood);

foodRouter.delete("/", deleteFood);

foodRouter.post("/", createFood);

module.exports = foodRouter;
