const FoodModel = require("../../schemas/foodSchema");

const createFood = async (req, res) => {
  const { foodName, price, image, ingredients, category } = req.body;
  console.log("create food controllers");
  try {
    const data = await FoodModel.create({
      foodName: foodName,
      price: price,
      image: image,
      ingredients: ingredients,
      category: category,
    });

    res.status(201).json(`createFood: ${data}`);
  } catch (err) {
    res.status(500).json(`Somethong went wrong: ${err}`);
  }
};

module.exports = createFood;
