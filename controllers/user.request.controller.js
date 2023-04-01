const UserRequestModel = require("../models/UserRequest");

const saveUserRequest = async (req, res) => {
  try {
    const { name, mobile, message } = req.body;
    const model = new UserRequestModel({
      name,
      mobile,
      message,
    });
    let result;
    const count = await UserRequestModel.countDocuments({mobile: mobile});
    if(count > 0){
      result = await UserRequestModel.updateOne({mobile: mobile}, {reply: message});
    } else {
      result = await model.save({mobile: mobile, name: name, message: message});
    }
    console.log('doc-received---', JSON.stringify(result));
    return res.send({
      data: result,
      message: "Request saved successfully",
      status: 200,
    });
  } catch (error) {
    console.log('error-in-request---', error?.message);
    if (error.message) {
      return res.status(400).json({ error: error.message });
    } else {
      return res.status(400).json({ error: "Error occured" });
    }
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

const appendUserRequestReplies = async (req, res) => {
  try {
    const { requestId } = req.params;
    console.log('requestId---', requestId);
    console.log('req.body.message---', req.body.message);

    const instance = await UserRequestModel.updateOne(
      { _id: requestId },
      {
        reply: req.body.message,
      }
    );
    if (instance.modifiedCount) {
      console.log('if---instance.modifiedCount---', instance.modifiedCount);
      return res.sendStatus(200);
    } else {
      res.status(404).json({ error: "not found" });
    }
  } catch (error) {
    console.log(error);
    if (error.message) {
      res.status(400).json({ error: error.message });
    }
    res.status(400).json({ error: "error" });
  }
};

module.exports = {
  saveUserRequest,
  getAllUserRequest,
  appendUserRequestReplies,
};
