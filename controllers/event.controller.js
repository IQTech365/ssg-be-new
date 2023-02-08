const mongoose = require("mongoose");
const Event = require("../models/Event");

// Create Event
const create = async (req, res) => {
  try {
    const { name, link, startDate, endDate } = req.body;
    const event = new Event({
      name,
      link,
      startDate,
      endDate,
    });
    const savedEvent = await event.save();
    res.send({
      data: savedEvent,
      message: "Event created successfully",
      status: 200,
    });
  } catch (error) {
    if (error.message) {
      res.status(400).json({ error: error.message });
    }
    res.status(500).json({ error: "error" });
  }
};

// Get all Event
const list = async (req, res) => {
  try {
    const list = await Event.find({}).sort({ createdAt: -1 }).exec();
    res.send({
      data: list,
      message: "Event Fetched successfully",
      status: 200,
    });
  } catch (error) {
    if (error.message) {
      res.status(400).json({ error: error.message });
    }
    res.status(500).json({ error: "error" });
  }
};

// update Event Based on Id
const update = async (req, res) => {
  try {
    const { id } = req.params;
    const objectId = new mongoose.Types.ObjectId(id);
    Event.findOneAndUpdate(
      { _id: objectId },
      req.body,
      { new: true },
      (err, doc) => {
        if (err) {
          return res.status(400).send({ error: err });
        } else if (doc) {
          return res.send({
            data: doc,
            message: "Event updated successfully",
            status: 200,
          });
        }
      }
    );
  } catch (error) {
    if (error.message) {
      res.status(400).json({ error: error.message });
    }
    res.status(500).json({ error: "error" });
  }
};

const remove = async (req, res) => {
  try {
    const { id } = req.params;
    const objectId = new mongoose.Types.ObjectId(id);
    const deleted = await Event.deleteOne({ _id: objectId });
    if (deleted.deletedCount) {
      return res.send({
        data: deleted,
        message: "Event removed successfully",
        status: 200,
      });
    }
    return res.status(404).json({ error: "Not found" });
  } catch (error) {
    if (error.message) {
      return res.status(400).json({ error: error.message });
    }
    return res.status(500).json({ error: "error" });
  }
};

module.exports = {
  create,
  remove,
  list,
  update,
};
