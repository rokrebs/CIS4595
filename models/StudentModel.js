const mongoose = require('mongoose');

// Define Schema (Only an example one for now)
const studentSchema = new mongoose.Schema ({
    name: {
        type: String
    },
    user: {
        type: String,
        required: true
    },
    pass: {
        type:String,
        required: true
    }
});

const studentModel = mongoose.model('Student', studentSchema);



module.exports = studentModel;