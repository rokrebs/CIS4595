import express from 'express';
import path from 'path';

import {router} from './routers/LoginRouter.js';
import {db} from './config/db.js';
import {query} from './controllers/StudentController.js'

const PORT = 3000;

const app = express();

app.use(express.static("resources"));


app.use("/", router);


app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})

query();
