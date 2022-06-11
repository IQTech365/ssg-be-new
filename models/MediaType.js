const mongoose = require("mongoose");

const MediaTypeSchema = new mongoose.Schema(
  {
    media_type: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("MediaType", MediaTypeSchema);
