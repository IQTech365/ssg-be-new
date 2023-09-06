const mongoose = require("mongoose");

const PushNotificationTokenSchema = new mongoose.Schema(
  {
    token: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("NotificationToken", PushNotificationTokenSchema);
