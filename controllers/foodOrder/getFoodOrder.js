const FoodOrderModel = require("../../schemas/foodOrderSchema");

const getFoodOrder = async (req, res) => {
  try {
    const data = await FoodOrderModel.find()
      .populate("user")
      .populate("foodOrderItems.food");

    console.log("datadadadadad", data);
    if (!data) {
      return res
        .status(404)
        .json({ message: "Order not found or access denied" });
    }
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

module.exports = getFoodOrder;
