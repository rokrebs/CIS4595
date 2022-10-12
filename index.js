const express = require('express')
const path = require('path');
const bodyParser = require('body-parser');
const loginRouter = require('./routers/LoginRouter.js');
const db = require('./config/db.js');
const limiter = require('./rateLimiter.js');
const cookieParser =  require('cookie-parser');
const helmet = require('helmet');

const PORT = 3000;

const app = express();

/**** SETUP HTTP ****/
app.use(express.static("resources"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/**** SECURITY MIDDLEWARE ****/
app.use(cookieParser());
app.use(helmet.hidePoweredBy());
app.use(limiter);

/**** ROUTERS ****/
app.use('/', loginRouter);


/**** SERVER ****/
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

//export default app;
