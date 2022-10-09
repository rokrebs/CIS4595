import { mongoose } from 'mongoose';
import { db } from '../config/db.js';

// Class model for DB
const classSchema = new mongoose.Schema({ name: String, code: String, students: Array });
const Class = mongoose.model('Class', classSchema);

// Query for all the students classes
const query = function () {
  Class.find({ students: 'dg1' }, (err, docs) => {
    console.log(`Query return for "name: Dean"\n${docs}`);
  });

  mongoose.disconnect();
};

// Runs above query with successful results
query();
