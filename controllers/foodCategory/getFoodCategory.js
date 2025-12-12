const FoodCategoryModel = require("../../schemas/foodCategorySchema");

const getFoodCategory = async (req, res) => {
  try {
    const data = await FoodCategoryModel.find();
    // console.log(data);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(`Somethong went wrong: ${err}`);
  }
};

module.exports = getFoodCategory;
