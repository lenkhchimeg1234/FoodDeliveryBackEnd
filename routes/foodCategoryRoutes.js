const express = require("express");
const getFoodCategory = require("../controllers/foodCategory/getFoodCategory");
const createFoodCategory = require("../controllers/foodCategory/createFoodCategory");
const deleteFoodCategory = require("../controllers/foodCategory/deleteFoodCategory");
const putFoodCategory = require("../controllers/foodCategory/putFoodCategory");
const verifyJWT = require("../controllers/middleware/verifyJWT");

const foodCategoryRouter = express.Router();

foodCategoryRouter.get("/", getFoodCategory);

foodCategoryRouter.put("/", verifyJWT, putFoodCategory);

foodCategoryRouter.delete("/:id", verifyJWT, deleteFoodCategory);

foodCategoryRouter.post("/", verifyJWT, createFoodCategory);

module.exports = foodCategoryRouter;
