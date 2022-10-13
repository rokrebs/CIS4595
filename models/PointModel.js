const mongoose = require('mongoose');

// Point schema
const pointSchema = new mongoose.Schema ({
    user: {
        type: String,
        required: true
    }, 
    points: {
        type: Number,
        required: true
    }
});

const pointModel = mongoose.model('Points', pointSchema);

module.exports = pointModel;
