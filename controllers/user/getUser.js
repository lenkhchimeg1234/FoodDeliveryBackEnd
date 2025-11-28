const UserModel = require("../../schemas/userSchema");

const getUser = async (req, res) => {
  const { id } = req.body;
  console.log(id, "ididid");
  try {
    const data = await UserModel.findById(id);

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(`Somethong went wrong: ${err}`);
  }
};

module.exports = getUser;
