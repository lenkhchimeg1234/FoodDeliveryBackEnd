const FoodModel = require("../../schemas/foodSchema");

const putFood = async (req, res) => {
  const { id } = req.params;
  const { foodName, price, image, ingredients, category } = req.body;

  try {
    const putFood = await FoodModel.findByIdAndUpdate(
      id,
      {
        foodName,
        price,
        image,
        ingredients,
        category,
      },
      { new: true }
    );

    if (!putFood) {
      return res.status(404).json("Food not found");
    }

    console.log(putFood);
    res.status(200).json(putFood);
  } catch (err) {
    console.error(err);
    res.status(500).json(`something went wrong, try again: ${err}`);
  }
};

module.exports = putFood;
