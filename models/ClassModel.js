const mongoose = require('mongoose');

// Class schema
const classSchema = new mongoose.Schema ({
    name: {
        type: String,
    }, 
    code: {
        type: String,
    }, 
    students: {
        type: Array,
    }
});

const classModel = mongoose.model('Class', classSchema);

module.exports = classModel;