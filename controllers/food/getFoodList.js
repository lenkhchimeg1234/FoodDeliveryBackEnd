const { default: mongoose, Schema } = require("mongoose");
const FoodModel = require("../../schemas/foodSchema");

const getFoodList = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await FoodModel.find({ category: id });
    // const data = await FoodModel.find({ category: id }).populate("category");

    res.status(200).json(data);
  } catch (err) {
    console.error("GET food error:", err);
    res.status(500).json(`Somethong went wrong: ${err}`);
  }
};

module.exports = getFoodList;
