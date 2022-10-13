const express = require('express');

const router = express.Router();

// Test access
router.get('/private', (req,res) => {

    if(req.session.username) {
        res.send({message: "You have access"});
    }
    else {
        res.send({ message: "you Dont have access" });
    }

});

// Destroy session test
router.get('/logout', (req,res) => {

    req.session.destroy();

    res.redirect('/');

});

module.exports = router;