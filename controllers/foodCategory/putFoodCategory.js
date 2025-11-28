const FoodCategoryModel = require("../../schemas/foodCategorySchema");

const putFoodCategory = async (req, res) => {
  const { id, categoryName } = req.body;

  try {
    const putFoodCategory = await FoodCategoryModel.findByIdAndUpdate(
      id,
      {
        categoryName,
      },
      { new: true }
    );

    if (!putFoodCategory) {
      return res.status(404).json("FoodCategory not found");
    }

    console.log(putFoodCategory);
    res.status(200).json(putFoodCategory);
  } catch (err) {
    console.error(err);
    res.status(500).json(`something went wrong, try again: ${err}`);
  }
};

module.exports = putFoodCategory;
