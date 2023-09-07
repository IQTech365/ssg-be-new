const mongoose = require("mongoose");

const AppUserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      default: null,
      required: true,
      unique: true,
    },
    mobile: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      default: null,
      required: true,
      unique: true,
    },
    message: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("AppUser", AppUserSchema);
