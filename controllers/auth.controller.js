const UserModel = require("../models/User");

const signIn = (req, res) => {
  const { email, password } = req.body;
  console.log('req.body--', req.body);
  UserModel.findOne(
    { email: email, password: password },
    function (error, user) {
      if (error) {
        res.status(400).json({ error: error.message });
      } else {
        res.send({ data: user, status: 200 });
      }
    }
  );
};

const createUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const user = new UserModel({ email, name, password, role });
    const doc = await user.save();
    res.send({ email: doc.email });
  } catch (error) {
    if (error.message) {
      res.status(400).json({ error: error.message });
    }
    res.status(400).json({ error: "error" });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.find({});
    res.send({ users });
  } catch (error) {
    if (error.message) {
      res.status(400).json({ error: error.message });
    }
    res.status(400).json({ error: "error" });
  }
};

module.exports = {
  signIn,
  createUser,
  getAllUsers,
};
