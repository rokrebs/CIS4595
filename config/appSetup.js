const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const session = require('express-session');
const path = require('path');
const coursesRouter = require('../routers/CoursesRouter.js');
const loginRouter = require('../routers/LoginRouter.js');
require('dotenv').config();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

const app = express();

/** ** SETUP HTTP *** */
app.use(express.static(path.join(__dirname, '../resources')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/** ** VIEW ENGINE *** */
app.set('views', path.join(__dirname, '../resources/views'));
app.set('view engine', 'pug');

/** ** SECURITY MIDDLEWARE *** */
app.use(helmet.hidePoweredBy());
app.use(limiter);
const oneHour = 100000 * 36;
app.use(session({
  secret: process.env.SECRET,
  saveUninitialized: true,
  cookie: { maxAge: oneHour },
  resave: false,
}));

/** ** ROUTERS *** */
app.use('/', loginRouter);
app.use('/', coursesRouter);
// for testing authorized/logged in users can be replaced
const testRouter = require('../routers/TestRouter.js');

app.use('/', testRouter);

module.exports = app;
