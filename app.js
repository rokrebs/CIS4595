const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const loginRouter = require('./routers/LoginRouter.js');
const limiter = require('./rateLimiter.js');

const app = express();

/** ** SETUP HTTP *** */
app.use(express.static('resources'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/** ** SECURITY MIDDLEWARE *** */
app.use(cookieParser());
app.use(helmet.hidePoweredBy());
app.use(limiter);

/** ** ROUTERS *** */
app.use('/', loginRouter);

module.exports = app;
