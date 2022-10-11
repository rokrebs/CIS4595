const mongoose = require('mongoose');

// Class model for DB
const classSchema = new mongoose.Schema ({name: String, code: String, students: Array});

const classModel = mongoose.model('Class', classSchema);

// Runs above query with successful results
module.exports = classModel;
