import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import { router } from './routers/LoginRouter.js';
import { db } from './config/db.js';
import { customLimiter } from './customLimitter.js';

const PORT = 3000;

const app = express();

app.use(express.static("resources"));
app.use(express.static("controllers"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// vdrf token needs to be implemented
app.use('/', router);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

export default app;
