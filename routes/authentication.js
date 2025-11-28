const express = require("express");
const loginUser = require("../controllers/authentication/loginUser");
const createUser = require("../controllers/user/createUser");
const UserModel = require("../schemas/userSchema");

const authenticationRouter = express.Router();

const isUserExist = async (req, res, next) => {
  const { email } = req.body;
  if (!email) {
    res.status(404).json("Email is required");
  }

  const user = await UserModel.findOne({ email: email });
  if (!user) {
    res.status(404).json("User not found.");
  } else {
    req.user = user;
    next();
  }
};

const isEmailExist = async (req, res, next) => {
  const { email } = req.body;
  if (!email) {
    res.status(404).json("Email is required");
  }

  const user = await UserModel.findOne({ email: email });
  if (user) {
    res.status(404).json("User already exist");
  } else {
    next();
  }
};

authenticationRouter.post("/login", isUserExist, loginUser);
authenticationRouter.post("/signup", isEmailExist, createUser);

module.exports = authenticationRouter;
