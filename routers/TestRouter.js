const express = require('express');
const points = require('../models/PointModel')

const router = express.Router();

// Test access
router.get('/private', (req,res) => {

    if(req.session.username) {
        res.send({message: "You have access"});
    }
    else {
        res.send({ message: "you don't have access" });
    }

});

// Test points only test for a
// already logged in user
router.get('/addPoints', (req,res) => {

    if(req.session.username) {
        points.addPoints(req.session.username,5);
        res.send({message: 'Attempted to add 5 points'})
    }
    else {
        res.send({ message: "you don't have access" });
    }

});

// Destroy session test
router.get('/logout', (req,res) => {

    req.session.destroy();

    res.redirect('/');

});

module.exports = router;