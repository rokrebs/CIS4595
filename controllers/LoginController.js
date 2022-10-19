const path = require('path');
const validator = require('express-validator');
const studentModel = require('../models/StudentModel.js');
const profModel = require('../models/ProfessorModel')
const bcrypt = require('bcrypt');


// Get request for student login page
function loginView(req, res) {
  res.status(200);
  res.sendFile(path.join(__dirname, '../resources/HTML/login.html'));
}

function invalidCredentials(req, res) {
    res.status(200);
    res.sendFile(path.join(__dirname, '../resources/HTML/invalidCredentials.html'));
}

//Post request for logging in students
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
                var session = req.session;
                session.username = username;
                return res.status(200).redirect(encodeURIComponent('courses'));
            }
            
            console.log(err);

            return res.redirect(encodeURIComponent('InvalidCredentials'));
        });
    } catch (error) {
        res.status(401).send(error.message);
        console.log("Error in db");
    }
};

// Get request for login page
function profLoginView(req, res) {
    res.status(200);
    res.sendFile(path.join(__dirname, '../resources/HTML/profLogin.html'));
  }
  
  function invalidProfCredentials(req, res) {
      res.status(200);
      res.sendFile(path.join(__dirname, '../resources/HTML/invalidProfCredentials.html'));
  }
  
  //Post request for logging in professors
  const handleProfLogin =  async (req, res) => {
      try{
          const errors = validator.validationResult(req);
          if(!errors.isEmpty()) {
              res.status(422).json({ errors: errors.array() });
          }
  
          console.log(req.body);
          const { username, password } = req.body;
          
  
          let prof = await profModel.findOne({user: username});
  
          //Checks for user in database
          if(!prof){
              return res.redirect(encodeURIComponent('InvalidProfCredentials'));
          }
  
          //Checks for valid password
          bcrypt.compare(password, prof.pass, (err, result) => {
              
              if (result) {
                  var session = req.session;
                  session.username = username;
                  session.prof = 1;
                  return res.status(200).redirect(encodeURIComponent('courses'));
              }
              
              console.log(err);
  
              return res.redirect(encodeURIComponent('InvalidProfCredentials'));
          });
      } catch (error) {
          res.status(401).send(error.message);
          console.log("Error in db");
      }
  };

module.exports = {
    loginView,
    handleLogin,
    invalidCredentials,
    profLoginView,
    handleProfLogin,
    invalidProfCredentials
};

