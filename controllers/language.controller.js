const LanguageModel = require("../models/Language");

const createLanguage = async (req, res) => {
  try {
    const { language } = req.body;
    const model = new LanguageModel({ language });
    const doc = await model.save();
    res.send({ data: doc.language, message: "Language created successfully", status: 200 });
  } catch (error) {
    if (error.message) {
      res.status(400).json({ error: error.message });
    }
    res.status(400).json({ error: "error" });
  }
};

const updateLanguage = async (req, res) => {
  try {
    const { language_id, value } = req.body;
    const user = new LanguageModel({ email, name, password, role });
    const doc = await user.save();
    res.send({ email: doc.email });
  } catch (error) {
    if (error.message) {
      res.status(400).json({ error: error.message });
    }
    res.status(400).json({ error: "error" });
  }
};

const deleteLanguage = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const user = new LanguageModel({ email, name, password, role });
    const doc = await user.save();
    res.send({ email: doc.email });
  } catch (error) {
    if (error.message) {
      res.status(400).json({ error: error.message });
    }
    res.status(400).json({ error: "error" });
  }
};

const getAllLanguages = async (req, res) => {
  try {
    const languages = await LanguageModel.find({});
    res.send({ languages });
  } catch (error) {
    if (error.message) {
      res.status(400).json({ error: error.message });
    }
    res.status(400).json({ error: "error" });
  }
};

module.exports = {
  createLanguage,
  updateLanguage,
  deleteLanguage,
  getAllLanguages,
};
