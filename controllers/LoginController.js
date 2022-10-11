const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const validator = require('express-validator');
const studentModel = require('../models/StudentModel.js');
const bcrypt = require('bcrypt');


// Get request for login page
function loginView(req, res) {
  res.status(200);
  res.sendFile(path.join(__dirname, '../resources/HTML/login.html'));
}

function invalidCredentials(req, res) {
    res.status(200);
    res.sendFile(path.join(__dirname, '../resources/HTML/invalidCredentials.html'));
}

//Post request for logging in users
const handleLogin =  async (req, res) => {
    try{
        
        const errors = validator.validationResult(req);
        if(!errors.isEmpty()) {
            res.status(422).json({ errors: errors.array() });
        }

        console.log(req.body);
        const { username, password } = req.body;
        

        let student = await studentModel.findOne({user: username});

        //Checks for user in database
        if(!student){
            return res.redirect(encodeURIComponent('InvalidCredentials'));
        }

        //Checks for valid password
        bcrypt.compare(password, student.pass, (err, result) => {
            
            if (result) {
                return res.status(200).json({ message: "User Logged in Successfully" });
            }
            
            console.log(err);

            return res.redirect(encodeURIComponent('InvalidCredentials'));
        });
    } catch (error) {
        res.status(401).send(error.message);
        console.log("Error in db");
    }
};

function updateCoursesComponent(numCourses, courses)
{
    for(i = 0; i < numCourses; i++){
	    var newLi = document.createElement("li");
	    newLi.className = "courseList";
        newLi.innerHTML = `<li> 
            <div class="card text-white bg-secondary mb-3" style="max-height: 10vh;">
                <h3 class="card-title-top">${courses[i].courseName}</h3>
                <div class="card-body">
                    <p class="card-text ">${courses[i].courseDescription}</p>
                </div>
            </div>
        </li>`;
	    list.appendChild(newLi);

    }
}

module.exports = {
    loginView,
    handleLogin,
    invalidCredentials
};

