const PushNotificationTokenModel = require("../models/PushNotificationToken");
const admin = require("firebase-admin");

const createNotificationToken = async (req, res) => {
    try {
        const { token, mobile } = req.body;
        const data = await PushNotificationTokenModel.find({});

        let tokenExists = false;

        for (const item of data) {
            if (item.token === token) {
                tokenExists = true;
                break;
            }
        }

        if (!tokenExists) {
            const notificationToken = new PushNotificationTokenModel({ token, mobile });
            const doc = await notificationToken.save();
            res.send({ token: doc.token, mobile: doc.mobile });
        } else {
            res.status(400).json({ error: "Identical token" });
        }
    } catch (error) {
        if (error.message) {
            res.status(400).json({ error: error.message });
        } else {
            res.status(400).json({ error: "error" });
        }
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