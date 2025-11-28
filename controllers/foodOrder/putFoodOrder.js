const FoodOrderModel = require("../../schemas/foodOrderSchema");
const putFoodOrder = async (req, res) => {
  const { id, user, totalPrice, foodOrderItems, status } = req.body;

  try {
    const putFoodOrder = await FoodOrderModel.findByIdAndUpdate(
      id,
      {
        user,
        totalPrice,
        foodOrderItems,
        status,
      },
      { new: true }
    );

    if (!putFoodOrder) {
      return res.status(404).json("FoodOrder not found");
    }

    console.log(putFoodOrder);
    res.status(200).json(putFoodOrder);
  } catch (err) {
    console.error(err);
    res.status(500).json(`something went wrong, try again: ${err}`);
  }
};

module.exports = putFoodOrder;
