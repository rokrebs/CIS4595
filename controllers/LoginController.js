import bodyParser from 'body-parser';
import { mongoose } from 'mongoose';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import {check, validationResult } from 'express-validator';

var loginValidate =[
  check('usernaame').isLength({min: 3, max: 5}).withMessage("please enter uwf userid").trim().escape(),
  check('password').isLength({min: 4}).trim().escape()
]

// Get request for login page
function loginView(req, res) {
  res.status(200);
  res.sendFile(path.join(dirname(fileURLToPath(import.meta.url)), '../resources/HTML/login.html'));
}

// Post request for logging in users
const handleLogin = async (req, res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()){
    return res.status(422).json({errros: errors.array()});
  }else{
    console.log(req.body);
    res.status(200);
    res.send(`Username: ${req.body.username} Password: ${req.body.password}`);
  }
 
};

export {
  loginView,
  handleLogin,
};
