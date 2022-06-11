const mongoose = require("mongoose");

const LanguageSchema = new mongoose.Schema(
  {
    language: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Language", LanguageSchema);
