const PushNotificationTokenModel = require("../models/PushNotificationToken");
const admin = require("firebase-admin");

const createNotificationToken = async (req, res) => {
    try {
        const { token } = req.body;
        const data = await PushNotificationTokenModel.find({});
        data && data.map(async data => {
            if (data.token != token) {
                const notificationToken = new PushNotificationTokenModel({ token });
                const doc = await notificationToken.save();
                res.send({ token: doc.token });
            } else {
                res.status(400).json({ error: "Identical token" });
            }
        })


    } catch (error) {
        if (error.message) {
            res.status(400).json({ error: error.message });
        }
        res.status(400).json({ error: "error" });
    }
};

const getAllNotificationToken = async (req, res) => {
    try {
        const data = await PushNotificationTokenModel.find({});
        res.send({ data });
    } catch (error) {
        if (error.message) {
            res.status(400).json({ error: error.message });
        }
        res.status(400).json({ error: "error" });
    }
};

module.exports = {
    createNotificationToken,
    getAllNotificationToken

}