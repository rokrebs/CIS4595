import express from 'express';
// import path from 'path';
import bodyParser from 'body-parser';
import helmet from 'helmet';
// import csurf from 'csurf';
import cookieParser from 'cookie-parser';
import check from 'express-validator';
import { router } from './routers/LoginRouter.js';
// import { db } from './config/db';
import { customLimiter } from './customLimitter.js';

// const csrfProtect = csrf({ cookie: true });
// const formParser = bodyParser.urlencoded({ extended: false });

const PORT = 3000;

const app = express();
app.use(helmet.hidePoweredBy()); // hide x powered by header
app.use(customLimiter);
app.use(cookieParser());

const loginValidate = [
  check('usernaame').isLength({ min: 3, max: 5 }).withMessage('please enter uwf userid').trim()
    .escape(),
  check('password').isLength({ min: 4 }).trim().escape(),
];

app.use(express.static('resources'));
app.use(express.static('view'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// vdrf token needs to be implemented
app.use('/', loginValidate, router);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
