const MediaModel = require("../models/Media");

const createMedia = async (req, res) => {
  try {
    const {
      media_url,
      language,
      media_type,
      media_category,
      author,
      media_sub_type,
      media_title,
      video_media_url,
      video_show_on_top,
      video_thumbnail,
    } = req.body;
    const model = new MediaModel({
      media_type,
      media_sub_type,
      media_url,
      video_thumbnail,
      media_language: language,
      media_category,
      media_title,
      author,
      video_media_url,
      video_show_on_top,
    });
    const doc = await model.save();
    res.send({
      data: doc.media,
      message: "Media created successfully",
      status: 200,
    });
  } catch (error) {
    if (error.message) {
      res.status(400).json({ error: error.message });
    }
    res.status(400).json({ error: "error" });
  }
};

const getAllMedia = async (req, res) => {
  try {
    const medias = await MediaModel.find({})
      .populate("media_language", "language")
      .populate("media_type", "media_type")
      .populate("media_sub_type")
      .populate("media_category", "category");
    res.send({ medias });
  } catch (error) {
    if (error.message) {
      res.status(400).json({ error: error.message });
    }
    res.status(400).json({ error: "error" });
  }
};

module.exports = {
  createMedia,
  getAllMedia,
};
