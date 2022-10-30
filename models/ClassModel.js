const mongoose = require('mongoose');

// Class schema
const classSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  code: {
    type: String,
  },
  professor: {
    type: String,
  },
  students: {
    type: Array,
  },
});

const classModel = mongoose.model('Class', classSchema);

async function findStudentClasses(student) {
  return classModel.find({ students: student });
}

async function findProfClasses(prof) {
  return classModel.find({ professor: prof });
}

module.exports = {
  findStudentClasses,
  findProfClasses,
};
