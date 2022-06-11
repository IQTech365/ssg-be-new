const MediaSubTypeModel = require("../models/MediaSubType");

const createMediaSubType = async (req, res) => {
  try {
    const { media_sub_type, media_type } = req.body;
    const model = new MediaSubTypeModel({ media_sub_type, parent_id: media_type });
    const doc = await model.save();
    res.send({ data: doc.mediaSubType, message: "MediaSubType created successfully", status: 200 });
  } catch (error) {
    if (error.message) {
      res.status(400).json({ error: error.message });
    }
    res.status(400).json({ error: "error" });
  }
};

const updateMediaSubType = async (req, res) => {
  try {
    const { media_type_id, value } = req.body;
    const user = new MediaSubTypeModel({ email, name, password, role });
    const doc = await user.save();
    res.send({ email: doc.email });
  } catch (error) {
    if (error.message) {
      res.status(400).json({ error: error.message });
    }
    res.status(400).json({ error: "error" });
  }
};

const deleteMediaSubType = async (req, res) => {
  try {
    const { media_type_id } = req.params;
    const user = new MediaSubTypeModel({ email, name, password, role });
    const doc = await user.save();
    res.send({ email: doc.email });
  } catch (error) {
    if (error.message) {
      res.status(400).json({ error: error.message });
    }
    res.status(400).json({ error: "error" });
  }
};

const getAllMediaSubTypes = async (req, res) => {
  try {
    const mediasubtypes = await MediaSubTypeModel.find({}).populate("parent_id");
    res.send({ mediasubtypes });
  } catch (error) {
    if (error.message) {
      res.status(400).json({ error: error.message });
    }
    res.status(400).json({ error: "error" });
  }
};

module.exports = {
  createMediaSubType,
  updateMediaSubType,
  deleteMediaSubType,
  getAllMediaSubTypes,
};
