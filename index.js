const express = require("express");
const cors = require("cors");
const connectToDB = require("./db");
const UserModel = require("./schemas/userSchema");
const FoodCategoryModel = require("./schemas/foodCategorySchema");
const FoodModel = require("./schemas/foodSchema");
const FoodOrderModel = require("./schemas/foodOrderSchema");

const userRouter = require("./routes/userRoutes");
const foodCategoryRouter = require("./routes/foodCategoryRoutes");
const foodRouter = require("./routes/foodRoutes");
const foodOrderRouter = require("./routes/foodOrderRoutes");
const authenticationRouter = require("./routes/authentication");

const app = express();
const PORT = process.env.PORT || 247;

app.use(cors());
app.use(express.json());

connectToDB();

app.use("/user", userRouter);
app.use("/foodcategory", foodCategoryRouter);
app.use("/food", foodRouter);
app.use("/foodorder", foodOrderRouter);
app.use("/authentication", authenticationRouter);

app.get("/", (req, res) => {
  res.send("helloworld, working");
});

app.listen(PORT, () => {
  console.log(`API listening on http://localhost:${PORT}`);
});
