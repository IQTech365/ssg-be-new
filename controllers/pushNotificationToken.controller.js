const PushNotificationTokenModel = require("../models/PushNotificationToken");
const admin = require("firebase-admin");

const createNotificationToken = async (req, res) => {
    try {
        const { token } = req.body;
        const data = await PushNotificationTokenModel.find({});

        if (data.length === 0) {
            const notificationToken = new PushNotificationTokenModel({ token });
            const doc = await notificationToken.save();
            res.status(200).send({ token: doc.token });
        } else {
            let isIdentical = false;

            for (const existingToken of data) {
                if (existingToken.token === token) {
                    isIdentical = true;
                    break;
                }
            }

            if (!isIdentical) {
                const notificationToken = new PushNotificationTokenModel({ token });
                const doc = await notificationToken.save();
                res.status(200).send({ token: doc.token });
            } else {
                res.status(400).json({ error: "Identical token" });
            }
        }
    } catch (error) {
        if (error.message) {
            res.status(400).json({ error: error.message });
        } else {
            res.status(400).json({ error: "Error" });
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

const deleteAllNotificationToken = async (req, res) => {
    try {
        const data = await PushNotificationTokenModel.deleteMany({});
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
    getAllNotificationToken,
    deleteAllNotificationToken

}