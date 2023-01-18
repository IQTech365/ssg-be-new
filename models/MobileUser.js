const mongoose = require("mongoose");

const MobileUserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      default: null,
    },
    mobile: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("MobileUser", MobileUserSchema);
