// const validator = require('express-validator');
// const studentModel = require('../models/StudentModel.js');
const classLookup = require('../models/ClassModel.js');

// const profModel = require('../models/ProfessorModel.js');

const coursesView = (req, res) => {
  if (req.session.username) {
    if (req.session.prof) {
      const classes = classLookup.findProfClasses(req.session.username);
      classes.then((val) => {
        const courseCodes = [];
        const courseNames = [];
        for (let i = 0; i < val.length; i++) {
          courseCodes.push(val[i].code);
          courseNames.push(val[i].name);
        }
        res.status(200).render('courses', {
          courses: courseCodes,
          courseName: courseNames,
        });
      })
        .catch((err) => {
          console.log(err);
          res.status(500).send({ message: 'Error loading courses' });
        });
    } else {
      const classes = classLookup.findStudentClasses(req.session.username);
      classes.then((val) => {
        const courseCodes = [];
        const courseNames = [];
        for (let i = 0; i < val.length; i++) {
          courseCodes.push(val[i].code);
          courseNames.push(val[i].name);
        }
        res.status(200).render('courses', {
          courses: courseCodes,
          courseName: courseNames,
        });
      })
        .catch((err) => {
          console.log(err);
          res.status(500).send({ message: 'Error loading courses' });
        });
    }
  } else {
    res.redirect('/');
  }
};

module.exports = {
  coursesView,
};
