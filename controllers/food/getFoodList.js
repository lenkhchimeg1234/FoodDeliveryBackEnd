const FoodModel = require("../../schemas/foodSchema");

const getFoodList = async (req, res) => {
  try {
    const data = await FoodModel.find().populate("category");
    console.log(data);
    res.status(200).json(data);
  } catch (err) {
    console.error("GET food error:", err);
    res.status(500).json(`Somethong went wrong: ${err}`);
  }
};

module.exports = getFoodList;
