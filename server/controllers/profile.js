const UserModel = require("../model/user");
const ProfileModel = require("../model/profile");

module.exports.findProfile = async (req, res) => {
  const { id } = req.query;
  try {
    const currUser = await UserModel.findById(id);
    const profile = await ProfileModel.findOne({ userId: id })
    // console.log("currUser: ", currUser);
    // 200: ok
    res.status(200).json({ currUser, profile });
  } catch (err) {
    // 500: Internal Server Error
    res.status(500).json({ message: "Something went wrong" });
  }
}

module.exports.updateRecord = async (req, res) => {
  const { userId, newRecord } = req.body;
  try {
    // console.log(`Client Side-> userId: ${userId},  newRecord: ${newRecord}`);
    await ProfileModel.findOneAndUpdate({
      userId: userId
    },
      { $push: { record: newRecord, $position: 0 } },
    );
  } catch (error) {
    console.log(error)
  }
}

