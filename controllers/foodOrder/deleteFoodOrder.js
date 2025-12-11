const FoodOrderModel = require("../../schemas/foodOrderSchema");

const deleteFoodOrder = async (req, res) => {
  

  try {
    await FoodOrderModel.findByIdAndDelete().populate("user");

    res.status(200).json("FoodOrder deleted");
  } catch (err) {
    res.status(500).json(`Somethong went wrong: ${err}`);
  }
};

module.exports = deleteFoodOrder;
