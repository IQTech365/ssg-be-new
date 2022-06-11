const mongoose = require("mongoose");

const MediaSubTypeSchema = new mongoose.Schema(
  {
    parent_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'MediaType',
      required: true,
    },
    media_sub_type: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("MediaSubType", MediaSubTypeSchema);
