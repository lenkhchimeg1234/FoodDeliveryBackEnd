const FoodModel = require("../../schemas/foodSchema");

const deleteFood = async (req, res) => {
  const { id } = req.body;

  try {
    await FoodModel.findByIdAndDelete(id);

    res.status(200).json("Food deleted");
  } catch (err) {
    res.status(500).json(`Somethong went wrong: ${err}`);
  }
};

module.exports = deleteFood;
