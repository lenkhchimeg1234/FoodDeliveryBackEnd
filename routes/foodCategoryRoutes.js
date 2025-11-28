const express = require("express");
const getFoodCategory = require("../controllers/foodCategory/getFoodCategory");
const createFoodCategory = require("../controllers/foodCategory/createFoodCategory");
const deleteFoodCategory = require("../controllers/foodCategory/deleteFoodCategory");
const putFoodCategory = require("../controllers/foodCategory/putFoodCategory");

const foodCategoryRouter = express.Router();

foodCategoryRouter.get("/", getFoodCategory);

foodCategoryRouter.put("/", putFoodCategory);

foodCategoryRouter.delete("/", deleteFoodCategory);

foodCategoryRouter.post("/", createFoodCategory);

module.exports = foodCategoryRouter;
