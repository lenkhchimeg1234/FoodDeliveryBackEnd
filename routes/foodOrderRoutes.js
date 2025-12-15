const express = require("express");
const getFoodOrder = require("../controllers/foodOrder/getFoodOrder");
const createFoodOrder = require("../controllers/foodOrder/createFoodOrder");
const deleteFoodOrder = require("../controllers/foodOrder/deleteFoodOrder");
const putFoodOrder = require("../controllers/foodOrder/putFoodOrder");
const verifyJWT = require("../controllers/middleware/verifyJWT");
const getOrder = require("../controllers/foodOrder/getOrder");

const foodOrderRouter = express.Router();

foodOrderRouter.get("/", getFoodOrder);

foodOrderRouter.get("/userId", verifyJWT, getOrder);

foodOrderRouter.put("/", verifyJWT, putFoodOrder);

foodOrderRouter.delete("/", verifyJWT, deleteFoodOrder);

foodOrderRouter.post("/", verifyJWT, createFoodOrder);

module.exports = foodOrderRouter;
