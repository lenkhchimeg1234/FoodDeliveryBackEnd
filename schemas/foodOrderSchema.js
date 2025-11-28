const { model, Schema } = require("mongoose");

const FoodOrderSchema = new Schema(
  {
    user: {
      type: String,
      required: [true],
    },
    totalPrice: {
      type: Number,
      required: [true],
    },
    foodOrderItems: {
      type: String,
      required: [true],
    },
    status: {
      type: String,
      required: [true],
    },
  },
  { timestamps: true }
);

const FoodOrderModel = model("foodorder", FoodOrderSchema);

module.exports = FoodOrderModel;
