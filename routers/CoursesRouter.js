const express = require('express');
const courses = require('../controllers/CoursesController.js');

const router = express.Router();

router.get('/courses', courses.coursesView);

module.exports = router;
