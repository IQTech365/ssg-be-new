const EPaperModel = require("../models/EPaper");

const createEPaper = async (req, res) => {
  try {
    const { title, publish_date, epaper_url } = req.body;
    const model = new EPaperModel({ title, publish_date, epaper_url });
    const doc = await model.save();
    res.send({ data: doc.mediaType, message: "EPaper created successfully", status: 200 });
  } catch (error) {
    if (error.message) {
      res.status(400).json({ error: error.message });
    }
    res.status(400).json({ error: "error" });
  }
};

const updateEPaper = async (req, res) => {
  try {
    const { media_type_id, value } = req.body;
    const user = new EPaperModel({ email, name, password, role });
    const doc = await user.save();
    res.send({ email: doc.email });
  } catch (error) {
    if (error.message) {
      res.status(400).json({ error: error.message });
    }
    res.status(400).json({ error: "error" });
  }
};

const deleteEPaper = async (req, res) => {
  try {
    const { media_type_id } = req.params;
    const user = new EPaperModel({ email, name, password, role });
    const doc = await user.save();
    res.send({ email: doc.email });
  } catch (error) {
    if (error.message) {
      res.status(400).json({ error: error.message });
    }
    res.status(400).json({ error: "error" });
  }
};

const getAllEPapers = async (req, res) => {
  try {
    const epapers = await EPaperModel.find({});
    res.send({ epapers });
  } catch (error) {
    if (error.message) {
      res.status(400).json({ error: error.message });
    }
    res.status(400).json({ error: "error" });
  }
};

module.exports = {
  createEPaper,
  updateEPaper,
  deleteEPaper,
  getAllEPapers,
};
