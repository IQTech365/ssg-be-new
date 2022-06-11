const CategoryModel = require("../models/Category");

const createCategory = async (req, res) => {
  try {
    const { category } = req.body;
    const model = new CategoryModel({ category });
    const doc = await model.save();
    res.send({ data: doc.category, message: "Category created successfully", status: 200 });
  } catch (error) {
    if (error.message) {
      res.status(400).json({ error: error.message });
    }
    res.status(400).json({ error: "error" });
  }
};

const updateCategory = async (req, res) => {
  try {
    const { language_id, value } = req.body;
    const user = new CategoryModel({ email, name, password, role });
    const doc = await user.save();
    res.send({ email: doc.email });
  } catch (error) {
    if (error.message) {
      res.status(400).json({ error: error.message });
    }
    res.status(400).json({ error: "error" });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const user = new CategoryModel({ email, name, password, role });
    const doc = await user.save();
    res.send({ email: doc.email });
  } catch (error) {
    if (error.message) {
      res.status(400).json({ error: error.message });
    }
    res.status(400).json({ error: "error" });
  }
};

const getAllCategories = async (req, res) => {
  try {
    const categories = await CategoryModel.find({});
    res.send({ categories });
  } catch (error) {
    if (error.message) {
      res.status(400).json({ error: error.message });
    }
    res.status(400).json({ error: "error" });
  }
};

module.exports = {
  createCategory,
  updateCategory,
  deleteCategory,
  getAllCategories,
};
