const mongoose = require("mongoose");

const HomeBannerSchema = new mongoose.Schema(
  {
    banner_link: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("HomeBanner", HomeBannerSchema);
