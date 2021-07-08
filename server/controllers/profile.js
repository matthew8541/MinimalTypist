const UserModel = require("../model/user");

module.exports.findProfile = async (req, res) => {
  const { id } = req.query;
  try {
    const currUser = await UserModel.findById(id);
    // console.log("currUser: ", currUser);
    // 200: ok
    res.status(200).json({ currUser });
  } catch (err) {
    // 500: Internal Server Error
    res.status(500).json({ message: "Something went wrong" });
  }
}