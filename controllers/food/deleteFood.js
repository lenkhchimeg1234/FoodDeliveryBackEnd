const FoodModel = require("../../schemas/foodSchema");

const deleteFood = async (req, res) => {
  

  try {
    await FoodModel.findByIdAndDelete().populate("category");

    res.status(200).json("Food deleted");
  } catch (err) {
    res.status(500).json(`Somethong went wrong: ${err}`);
  }
};

module.exports = deleteFood;
