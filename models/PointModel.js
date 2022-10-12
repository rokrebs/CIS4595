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

const pointModel = mongoose.model('Point', pointSchema);

module.exports = pointModel;