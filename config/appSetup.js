const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const loginRouter = require('./../routers/LoginRouter.js');
//const coursesRouter = require('./../routers/CoursesRouter.js');
//const limiter = require('./../routers/middlewares/rateLimiter.js');
const session = require('express-session');
require('dotenv').config();

const app = express();

/** ** SETUP HTTP *** */
app.use(express.static('resources'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/** ** SECURITY MIDDLEWARE *** */
app.use(cookieParser());
app.use(helmet.hidePoweredBy());
//app.use(limiter);
const oneHour = 100000 * 36;
app.use(session({
    secret: process.env.SECRET,
    saveUninitialized: true,
    cookie: { maxAge: oneHour },
    resave: false
})); 

/** ** ROUTERS *** */
app.use('/', loginRouter);
//app.use('/', coursesRouter);
// for testing authorized/logged in users can be replaced
const testRouter = require('../routers/TestRouter');
app.use('/', testRouter);

module.exports = app;
