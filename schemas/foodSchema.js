const { model, Schema } = require("mongoose");

const FoodSchema = new Schema(
  {
    foodName: {
      type: String,
      required: [true],
    },

    price: {
      type: Number,
      required: [true],
      min: 0,
    },

    image: {
      type: String,
      data: Buffer,
      // required: [true],
    },

    ingredients: {
      type: String,
      required: [true],
    },
    // category: {
    //   type: Schema.Types.ObjectId,
    //   ref: "foodcategory",
    // },
    category: {
      type: String,
    },
  },
  { timestamps: true }
);

const FoodModel = model("food", FoodSchema);

module.exports = FoodModel;
