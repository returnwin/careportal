const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ImgSchema = new Schema({
    img: { data: Buffer, contentType: String}
}, {
    timestamps: true
});

const locationSchema = new Schema({
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
})
const donationSchema = new Schema({
    userId: {
        type: String
    },
    name: {
        type: String
    },
    location: [locationSchema],
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
    img: [ImgSchema]
})


module.exports = mongoose.model("Donation", donationSchema);