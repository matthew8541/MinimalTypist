const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserModel = require("../model/user");
const ProfileModel = require("../model/profile");

module.exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const oldUser = await UserModel.findOne({ email });

    if (!oldUser) return res.status(404).json({ message: "User doesn't exist" });

    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

    if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    // 200: ok
    res.status(200).json({ result: oldUser, token });
  } catch (err) {
    // 500: Internal Server Error
    res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports.register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const oldUser = await UserModel.findOne({ email });

    if (oldUser) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await UserModel.create({ username, email, password: hashedPassword });
    const profile = await ProfileModel.create({ userId: result._id, record: [] });
    console.log(profile);

    const token = jwt.sign(
      { email: result.email, id: result._id },
      process.env.JWT_SECRET,
      { expiresIn: "3h" }
    );
    // 201: The request has been fulfilled and resulted in a new resource being created.
    res.status(201).json({ result, profile, token });
  } catch (error) {
    // 500: Internal Server Error
    res.status(500).json({ message: "Something went wrong" });
    console.log(error);
  }
};

module.exports.getUser = async (req, res) => {
  // const {} = req.body;
  try {
    const user = await UserModel.findById(req.userId);
    res.json({ user });
  } catch (error) {
    console.log(error)
  }
}

module.exports.tokenIsValid = async (req, res) => {
  try {
    const token = req.body.Headers["x-auth-token"];
    if (!token) {
      console.log("No Token")
      return res.json(false);
    }

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    // console.log("JWT Verfied: ", verified);

    if (!verified) {
      console.log("Not Verified");
      return res.json(false);
    }

    const user = await UserModel.findById(verified.id);
    console.log("User: ", user)
    if (!user) return res.json(false);

    return res.json(true);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};