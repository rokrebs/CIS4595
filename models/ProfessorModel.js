const mongoose = require('mongoose');

// Professor schema
const profSchema = new mongoose.Schema ({
    name: {
        type: String,
    },
    user: {
        type: String,
        requied: true
    }, 
    pass: {
        type: String,
        required: true
    }
});

const profModel = mongoose.model('Professor', profSchema);

module.exports = profModel;