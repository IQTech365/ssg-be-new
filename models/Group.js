const mongoose = require('mongoose');

const GroupSchema = new mongoose.Schema(
  {
    inputsCount: {
      type: String,
      required: true,
    },
    interval: {
      type: String,
      required: true,
      unique: true,
    },
    position: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model('Group', GroupSchema)