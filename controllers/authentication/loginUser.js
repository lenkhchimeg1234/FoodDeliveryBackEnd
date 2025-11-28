const UserModel = require("../../schemas/userSchema");
const bcrypt = require("bcrypt");

const loginUser = async (req, res) => {
  const { password } = req.body;
  const user = req.user;
  console.log();

  try {
    // const user = await UserModel.findOne({ email });

    const isPasswordMatching = await bcrypt.compare(password, user.password);
    console.log("isPasswordMatching", isPasswordMatching);

    if (isPasswordMatching) {
      res.status(200).json(`user: ${user}`);
    } else {
      res.status(400).json("Password does not match");
    }
  } catch (err) {
    res.status(500).json(`Somethong went wrong: ${err}`);
  }
};

module.exports = loginUser;
