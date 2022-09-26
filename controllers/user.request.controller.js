const UserRequestModel = require("../models/UserRequest");

const saveUserRequest = async (req, res) => {
  try {
    const {
      name,
      mobile,
      message,
    } = req.body;
    const model = new UserRequestModel({
      name,
      mobile,
      message,
    });
    const doc = await model.save();
    res.send({
      data: doc,
      message: "Request saved successfully",
      status: 200,
    });
  } catch (error) {
    if (error.message) {
      res.status(400).json({ error: error.message });
    }
    res.status(400).json({ error: "error" });
  }
};

const getAllUserRequest = async (req, res) => {
  try {
    const userRequests = await UserRequestModel.find({});
    res.send({ userRequests });
  } catch (error) {
    if (error.message) {
      res.status(400).json({ error: error.message });
    }
    res.status(400).json({ error: "error" });
  }
};

module.exports = {
  saveUserRequest,
  getAllUserRequest,
};
