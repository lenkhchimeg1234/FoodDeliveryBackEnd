const FoodOrderModel = require("../../schemas/foodOrderSchema");

const createFoodOrder = async (req, res) => {
  const { totalPrice, foodOrderItems, status, address } = req.body;
  // console.log("hello", req.body);
  // console.log("create foodOrder controllers");
  try {
    const data = await FoodOrderModel.create({
      user: req.user._id,
      totalPrice: totalPrice,
      foodOrderItems: foodOrderItems,
      status: status,
      address: address,
    });
    // console.log("data", data);

    res.status(201).json(`createFoodOrder: ${data}`);
  } catch (err) {
    res.status(500).json(`Somethong went wrong: ${err}`);
  }
};

module.exports = createFoodOrder;
