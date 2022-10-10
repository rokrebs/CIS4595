import { db } from '../config/db.js';

// Class model for DB
const classSchema = new mongoose.Schema ({name: String, code: String, students: Array});

const classModel = mongoose.model('Class', classSchema);

// Runs above query with successful results
export {
    classModel
};
