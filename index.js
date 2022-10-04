import express from 'express';
import path from 'path';

import {router} from './routers/LoginRouter.js';
import {db} from './config/db.js';

const PORT = 3000;

const app = express();

app.use(express.static("resources"));
app.use(express.static("view"));

app.use('/', router);

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})


