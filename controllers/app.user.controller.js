const AppUserModel = require("../models/AppUser");
const otpGenerator = require("otp-generator");
const Otp = require("../models/Otp");
const axios = require("axios").default;

const KUTILITY_API_KEY = "462C2859390A37";
const CAMPAIGN_ID = 13439;
const ROUTE_ID = 7;
const TYPE = "text";
const SENDER_ID = "SAITRU";
const TEMPLATE_ID = "1007205638260302850";
const PE_ID = "1001436554872187270";

const getOtpToRegisterUser = async (req, res) => {
  try {
    const { mobile } = req.body;
    const otpCode = otpGenerator.generate(4, {
      upperCaseAlphabets: false,
      specialChars: false,
    });

    const otp = await new Otp({
      mobile: mobile,
      otp: otpCode,
    });
    const savedOtp = await otp.save();
    const msg = `Dear ,OTP-${otpCode} is your One Time Password to complete your registration process. This OTP will expire in 30 minutes. SAITRU`;
    const URL = `http://kutility.org/app/smsapi/index.php?key=${KUTILITY_API_KEY}&campaign=${CAMPAIGN_ID}&routeid=${ROUTE_ID}&type=${TYPE}&contacts=${mobile}&senderid=${SENDER_ID}&msg=${msg}&template_id=${TEMPLATE_ID}&pe_id=${PE_ID}`;

    const response = await axios.get(URL).catch((error) => {
      res.send({
        message: "error in sending otp",
      });
      return;
    });
    await AppUserModel.create({ mobile });
    res.send({
      message: "otp sent successfully--",
      data: response.data,
    });
  } catch (error) {
    res.send({
      error: error,
    });
    console.log(error);
  }
};

const verifyOtp = async (req, res) => {
  const otpHolder = await Otp.find({
    number: req.body.number,
  });
  if (otpHolder.length === 0)
    return res.status(400).send({ message: "You use an Expired Otp!" });
  const rightOtp = otpHolder[otpHolder.length - 1];
  if (rightOtp.otp === req.body.otp) {
    await Otp.deleteMany({
      number: req.body.number,
    });
    return res.status(200).send({
      message: "Otp Verified Successfully",
    });
  } else {
    return res.status(400).send({
      message: "Wrong Otp!",
    });
  }
};

const registerAndLoginAppUser = async (req, res) => {
  try {
    const { mobile } = req.body;
    const model = new UserRequestModel({
      mobile,
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
  // saveUserRequest,
  getAllUserRequest,
  getOtpToRegisterUser,
  registerAndLoginAppUser,
  verifyOtp,
};
