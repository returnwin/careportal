const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const donationSchema = new Schema({
    userId: {
        type: String
    },
    name: {
        type: String
    },
    location: {
        street: {
            type: String
        },
        city: {
            type: String
        },
        state: {
            type: String
        },
        zip: {
            type: String
        }
    },
    date: {
        type: String
    },
    itemType: {
        type: String
    },
    itemTitle: {
        type: String
    },
    itemDesc: {
        type: String
    },
    img: {
        data: Buffer,
        contentType: String
    }
})


module.exports = mongoose.model("Donation", donationSchema);