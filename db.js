const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://Lenkhchimeg321:Pass.1201word@cluster0.1sjexwo.mongodb.net/"
    );
    console.log("DATABASE connection success");
  } catch (err) {
    console.log("DATABASE connection fail", err);
  }
};
module.exports = connectToDB;
