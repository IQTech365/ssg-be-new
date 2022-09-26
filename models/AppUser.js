const mongoose = require('mongoose');

const AppUserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    mobile: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
    },
    message: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model('AppUser', AppUserSchema);