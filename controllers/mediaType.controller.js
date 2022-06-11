const MediaTypeModel = require("../models/MediaType");

const createMediaType = async (req, res) => {
  try {
    const { media_type } = req.body;
    const model = new MediaTypeModel({ media_type });
    const doc = await model.save();
    res.send({ data: doc.mediaType, message: "MediaType created successfully", status: 200 });
  } catch (error) {
    if (error.message) {
      res.status(400).json({ error: error.message });
    }
    res.status(400).json({ error: "error" });
  }
};

const updateMediaType = async (req, res) => {
  try {
    const { media_type_id, value } = req.body;
    const user = new MediaTypeModel({ email, name, password, role });
    const doc = await user.save();
    res.send({ email: doc.email });
  } catch (error) {
    if (error.message) {
      res.status(400).json({ error: error.message });
    }
    res.status(400).json({ error: "error" });
  }
};

const deleteMediaType = async (req, res) => {
  try {
    const { media_type_id } = req.params;
    const user = new MediaTypeModel({ email, name, password, role });
    const doc = await user.save();
    res.send({ email: doc.email });
  } catch (error) {
    if (error.message) {
      res.status(400).json({ error: error.message });
    }
    res.status(400).json({ error: "error" });
  }
};

const getAllMediaTypes = async (req, res) => {
  try {
    const mediatypes = await MediaTypeModel.find({});
    res.send({ mediatypes });
  } catch (error) {
    if (error.message) {
      res.status(400).json({ error: error.message });
    }
    res.status(400).json({ error: "error" });
  }
};

module.exports = {
  createMediaType,
  updateMediaType,
  deleteMediaType,
  getAllMediaTypes,
};
