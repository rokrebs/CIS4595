const express = require('express');
const repo = require('../repo/Repo');

const router = express.Router();

router.get('/private', (req,res) => {

    const answer = repo.verify(req.session.id);

    answer.then(value => {
        if(value){
            res.send({message: "You have access!"});
            // send appropriate details
        }
        else {
            res.send({message: "You DONT have access"});
            // Can then redirect back to login page
        }
    }).catch(error => {
        console.log('Verify error TestRouter.js');
    });

});

module.exports = router;