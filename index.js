const express = require('express')
const path = require('path');
const bodyParser = require('body-parser');
const validator = require('express-validator')
const loginRouter = require('./routers/LoginRouter.js');
const db = require('./config/db.js');
const customLimiter = require('./customLimitter.js');
const cookieParser =  require('cookie-parser');
const helmet = require('helmet');

const PORT = 3000;

const app = express();

/**** SETUP HTTP ****/
app.use(express.static("resources"));
app.use(express.static("controllers"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/**** SECURITY MIDDLEWARE ****/
app.use(cookieParser());
app.use(helmet.hidePoweredBy());
//app.use(customLimiter);

const loginValidator = [
  validator.check('username', 'Username should be a UWF userID').isLength({ min: 3, max: 5 }).trim().escape(),
  validator.check('password', 'Password should be more than 4 characters!').isLength({ min: 4 }).trim().escape(),
];

/**** ROUTERS ****/
app.use('/', loginValidator, loginRouter);


/**** SERVER ****/
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

//export default app;
