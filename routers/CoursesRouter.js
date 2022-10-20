const express = require('express');
const courses = require('../controllers/CoursesController');

const router = express.Router();

router.get('/courses', courses.coursesView);

module.exports = router;