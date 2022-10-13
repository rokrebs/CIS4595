const express = require('express');

const router = express.Router();

router.get('/private', (req,res) => {

    if(req.session.username) {
        res.send({message: "You have access"});
    }
    else {
        res.send({ message: "you Dont have access" });
    }

});

module.exports = router;