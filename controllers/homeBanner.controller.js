const HomeBannerModel = require("../models/HomeBanner");

const createBanner = async (req, res) => {
  try {
    const { banner_link } = req.body;
    const obj = new HomeBannerModel({ banner_link });
    const doc = await obj.save();
    res.send({ message: "Banner inserted successfully" });
  } catch (error) {
    if (error.message) {
      res.status(400).json({ error: error.message });
    }
    res.status(400).json({ error: "error" });
  }
};

const getBanners = async (req, res) => {
  try {
    const banners = await HomeBannerModel.find({});
    res.send({ banners });
  } catch (error) {
    if (error.message) {
      res.status(400).json({ error: error.message });
    }
    res.status(400).json({ error: "error" });
  }
};

module.exports = {
  createBanner,
  getBanners,
};
