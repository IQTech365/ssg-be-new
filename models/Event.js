const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        link: {
            type: String,
            required: true,
        },
        startDate:{
            type:Date,
            required: true
        },
        endDate:{
            type:Date,
            required: true
        },
    },
    {
        timestamps: true,
    }
);
module.exports = mongoose.model("Event", EventSchema);
