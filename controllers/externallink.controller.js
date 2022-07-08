const ExternalLinkModel = require("../models/ExternalLink");


const createExternalLink = async (req, res) => {
  try {
    const { title, link } = req.body;
    const model = new ExternalLinkModel({ title, link });
    const doc = await model.save();
    res.send({ data: doc, message: "External Link created successfully", status: 200 });
  } catch (error) {
    if (error.message) {
      res.status(400).json({ error: error.message });
    }
    res.status(400).json({ error: "error" });
  }
};

const updateExternalLink = async (req, res) => {
  try {
    const { link_id, value } = req.body;
    const user = new ExternalLinkModel({ email, name, password, role });
    const doc = await user.save();
    res.send({ email: doc.email });
  } catch (error) {
    if (error.message) {
      res.status(400).json({ error: error.message });
    }
    res.status(400).json({ error: "error" });
  }
};

const deleteExternalLink = async (req, res) => {
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

const getAllExternalLinks = async (req, res) => {
  try {
    const externalLinks = await ExternalLinkModel.find({});
    res.send({ externalLinks });
  } catch (error) {
    if (error.message) {
      res.status(400).json({ error: error.message });
    }
    res.status(400).json({ error: "error" });
  }
};

module.exports = {
  createExternalLink,
  updateExternalLink,
  deleteExternalLink,
  getAllExternalLinks,
};
