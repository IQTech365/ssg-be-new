const mongoose = require("mongoose");

const PushNotificationTokenSchema = new mongoose.Schema(
  {
    token: {
      type: String,
      required: true,
      unique: [true, 'already exist']
    },
    mobile: {
      type: String,
      unique: [false, 'already exist mobile no']
    }
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("NotificationToken", PushNotificationTokenSchema);
