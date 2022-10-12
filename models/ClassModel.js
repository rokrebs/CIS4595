const mongoose = require('mongoose');

// Class schema
const classSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: true
    }, 
    code: {
        type: String,
        required: true
    }, 
    students: {
        type: Array,
        required: true
    }
});

const classModel = mongoose.model('Class', classSchema);

module.exports = classModel;