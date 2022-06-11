const mongoose = require("mongoose");

const MediaSchema = new mongoose.Schema(
  {
    media_url: {
      type: String,
      required: false,
    },
    media_language: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Language',
      required: true,
    },
    media_type: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'MediaType',
      required: true,
    },
    media_sub_type: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'MediaSubType',
    },
    media_category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
      required: true,
    },
    media_title: {
      type: String,
      required: true,
    },
    video_media_url: {
      type: String,
      required: false
    },
    video_show_on_top: {
      type: Boolean,
      required:false,
    },
    author: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Media", MediaSchema);
