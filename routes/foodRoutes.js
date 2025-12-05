const express = require("express");
const getFood = require("../controllers/food/getFood");
const createFood = require("../controllers/food/createFood");
const deleteFood = require("../controllers/food/deleteFood");
const putFood = require("../controllers/food/putFood");
const getFoodList = require("../controllers/food/getFoodList");
const verifyJWT = require("../controllers/middleware/verifyJWT");

const foodRouter = express.Router();

foodRouter.get("/", getFood);

foodRouter.get("/:id", getFoodList);

foodRouter.put("/:id", verifyJWT, putFood);

foodRouter.delete("/:id", verifyJWT, deleteFood);

foodRouter.post("/", verifyJWT, createFood);

module.exports = foodRouter;
