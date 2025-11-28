const UserModel = require("../../schemas/userSchema");

const deleteUser = async (req, res) => {
  const { id } = req.body;

  try {
    await UserModel.findByIdAndDelete(id);

    res.status(200).json("user deleted");
  } catch (err) {
    res.status(500).json(`Somethong went wrong: ${err}`);
  }
};

module.exports = deleteUser;
