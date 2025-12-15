const { model, Schema } = require("mongoose");
const FoodOrderItem = new Schema({
  food: {
    type: Schema.Types.ObjectId,
    ref: "food",
  },
  quantity: {
    type: Number,
    required: [true],
  },
});

const FoodOrderSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    totalPrice: {
      type: Number,
      required: [true],
    },
    foodOrderItems: {
      type: [FoodOrderItem],
    },
    address: {
      type: String,
      required: [true],
    },
    status: {
      type: String,
      default: "PENDING",
      enum: ["PENDING", "CANCELED", "DELIVERED"],
    },
  },
  { timestamps: true }
);

const FoodOrderModel = model("foodorder", FoodOrderSchema);

module.exports = FoodOrderModel;
