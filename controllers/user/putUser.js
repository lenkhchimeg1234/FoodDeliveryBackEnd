const UserModel = require("../../schemas/userSchema");

const putUser = async (req, res) => {
  const { id, email, password, phoneNumber, address } = req.body;

  try {
    const putUser = await UserModel.findByIdAndUpdate(
      id,
      {
        email,
        password,
        phoneNumber,
        address,
      },
      { new: true }
    );

    if (!putUser) {
      return res.status(404).json("user not found");
    }

    console.log(putUser);
    res.status(200).json(putUser);
  } catch (err) {
    console.error(err);
    res.status(500).json(`something went wrong, try again: ${err}`);
  }
};

module.exports = putUser;
