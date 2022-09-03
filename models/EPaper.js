const mongoose = require("mongoose");

const EPaperSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    publish_date: {
      type: Date,
      required: true,
    },
    epaper_url: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("EPaper", EPaperSchema);
