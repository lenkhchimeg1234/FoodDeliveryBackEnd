const { model, Schema } = require("mongoose");

const FoodCategorySchema = new Schema(
  {
    categoryName: {
      type: String,
      required: [true],
    },
  },
  { timestamps: true }
);

const FoodCategoryModel = model("foodcategory", FoodCategorySchema);

module.exports = FoodCategoryModel;
