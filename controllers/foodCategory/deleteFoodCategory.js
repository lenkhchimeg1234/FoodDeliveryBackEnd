const FoodCategoryModel = require("../../schemas/foodCategorySchema");

const deleteFoodCategory = async (req, res) => {
  const { id } = req.body;

  try {
    await FoodCategoryModel.findByIdAndDelete(id);

    res.status(200).json("FoodCategory deleted");
  } catch (err) {
    res.status(500).json(`Somethong went wrong: ${err}`);
  }
};

module.exports = deleteFoodCategory;
