const AppUserModel = require("../models/AppUser");
const otpGenerator = require('otp-generator')

const KUTILITY_API_KEY = '462C2859390A37';
const CAMPAIGN_ID = 13439;
const ROUTE_ID = 7;
const TYPE = 'text';
const SENDER_ID = 'SAITRU';
const TEMPLATE_ID =  '1007205638260302850';
const PE_ID = '1001436554872187270';

const getOtpToRegisterUser = (req, res) => {
  try {
    const { mobile } = req.body;
    const otpCode = otpGenerator.generate(4, { upperCaseAlphabets: false, specialChars: false });
    const msg = `Dear ,OTP-${otpCode} is your One Time Password to complete your registration process. This OTP will expire in 30 minutes. SAITRU`;
    const URL = `http://kutility.org/app/smsapi/index.php?key=${KUTILITY_API_KEY}&campaign=${CAMPAIGN_ID}&routeid=${ROUTE_ID}&type=${TYPE}&contacts=${mobile}&senderid=${SENDER_ID}&msg=${msg}&template_id=${TEMPLATE_ID}&pe_id=${PE_ID}`;
    fetch(URL).then(response => {
      console.log("otp sent successfully--", response);
    }).catch(error => {
      console.log("error in sending otp")
    })
    
  } catch (error) {
    
  }
}

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
  saveUserRequest,
  getAllUserRequest,
};
