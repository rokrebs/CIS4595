import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import { router } from './routers/LoginRouter.js';
import { db } from './config/db.js';

const PORT = 3000;

const app = express();

app.use(express.static('resources'));
app.use(express.static('view'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', router);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
