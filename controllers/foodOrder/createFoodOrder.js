const FoodOrderModel = require("../../schemas/foodOrderSchema");

const createFoodOrder = async (req, res) => {
  const { user, totalPrice, foodOrderItems, status } = req.body;
  console.log("create foodOrder controllers");
  try {
    const data = await FoodOrderModel.create({
      user: user,
      totalPrice: totalPrice,
      foodOrderItems: foodOrderItems,
      status: status,
    });

    res.status(201).json(`createFoodOrder: ${data}`);
  } catch (err) {
    res.status(500).json(`Somethong went wrong: ${err}`);
  }
};

module.exports = createFoodOrder;
