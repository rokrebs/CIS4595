import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import { check } from 'express-validator'
import { router } from './routers/LoginRouter.js';
import { db } from './config/db.js';
import { customLimiter } from './customLimitter.js';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';

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
  check('username', 'Username should be a UWF userID').isLength({ min: 3, max: 5 }).trim().escape(),
  check('password', 'Password should be more than 4 characters!').isLength({ min: 4 }).trim().escape(),
];

/**** ROUTERS ****/
app.use('/', loginValidator, router);


/**** SERVER ****/
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

export default app;
