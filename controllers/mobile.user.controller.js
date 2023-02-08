const MobileUserModel = require("../models/MobileUser");

const createMobileUser = async (req, res) => {
  try {
    const { name, email, mobile } = req.body;
    const user = new MobileUserModel({ name, email, mobile });
    const doc = await user.save();
    res.send({ message: "Mobile user created successfully" });
  } catch (error) {
    if (error.message) {
      res.status(400).json({ error: error.message });
    }
    res.status(400).json({ error: "error" });
  }
};

const getAllMobileUsers = async (req, res) => {
  try {
    const users = await MobileUserModel.find({});
    res.send({ users });
  } catch (error) {
    if (error.message) {
      res.status(400).json({ error: error.message });
    }
    res.status(400).json({ error: "error" });
  }
};

module.exports = {
  createMobileUser,
  getAllMobileUsers,
};
