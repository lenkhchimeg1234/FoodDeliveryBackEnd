const FoodOrderModel = require("../../schemas/foodOrderSchema");

const getOrder = async (req, res) => {
  try {
    const userId = req.user._id;

    console.log("this is undefined", userId);

    const data = await FoodOrderModel.find({
      user: userId,
    })
      .populate("user")
      .populate("foodOrderItems.food");

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

module.exports = getOrder;
