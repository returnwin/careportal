const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const photoSchema = new Schema({
    img: {
        data: Buffer,
        contentType: String
    }
    
});

module.exports = mongoose.model('Photo', photoSchema);