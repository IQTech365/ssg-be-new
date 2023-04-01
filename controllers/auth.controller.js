const UserModel = require("../models/User");

const signIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    const result = await UserModel.findOne({ email: email, password: password });
    if(result){
      return res.send({ data: result, status: 200 });
    } else {
      return res.status(403).json({error: 'username/password incorrect'});
    }
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }

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
