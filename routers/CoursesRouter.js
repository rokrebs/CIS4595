const express = require('express');
const classModel = require('../models/ClassModel');

const router = express.Router();

router.get('/courses', (req,res) => {
    if(req.session.username) {
        const classes = classModel(req.session.username);
        classes.then(val => {
            var courseCodes = [];
            var courseNames = [];
            for(let i = 0; i < val.length; i++)
            {
                courseCodes.push(val[i].code);
                courseNames.push(val[i].name);
            }
            res.status(200).render('courses', {
                courses: courseCodes,
                courseName: courseNames
        })
        })
        .catch(err => {
            console.log(err);
            res.status(500).send({message: "Error loading courses"});
        });
    }
    else {
        res.redirect('/');
    }
})

module.exports = router;