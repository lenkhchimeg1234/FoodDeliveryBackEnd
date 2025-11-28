const FoodCategoryModel = require("../../schemas/foodCategorySchema");

const createFoodCategory = async (req, res) => {
  const { categoryName } = req.body;
  console.log("create foodCategory controllers");
  try {
    const data = await FoodCategoryModel.create({
      categoryName: categoryName,
    });

    res.status(201).json(`createFoodCategory: ${data}`);
  } catch (err) {
    res.status(500).json(`Somethong went wrong: ${err}`);
  }
};

module.exports = createFoodCategory;
