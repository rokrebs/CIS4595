const mongoose = require('mongoose');

// Point schema
const pointSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
  },
  points: {
    type: Number,
  },
});

const pointModel = mongoose.model('Points', pointSchema);

async function addPoints(user, numPoints) {
  const student = await pointModel.findOne({ user });

  if (!student) {
    console.log(`Error finding student: ${user}`);
    return;
  }

  const points = student.points + numPoints;

  await pointModel.updateOne({ user }, { points });
}

module.exports = {
  pointModel,
  addPoints,
};
