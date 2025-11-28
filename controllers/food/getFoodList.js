const FoodModel = require("../../schemas/foodSchema");

const getFoodList = async (req, res) => {
  const { id } = req.params;
  console.log(id, "id");
  try {
    const data = await FoodModel.find({ category: id });
    console.log(data);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(`Somethong went wrong: ${err}`);
  }
};

module.exports = getFoodList;
