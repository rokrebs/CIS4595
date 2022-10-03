import express from 'express';
import path, { dirname } from 'path';
import {fileURLToPath} from 'url';

const router = express.Router();

router.get('/', (req, res) => {

    res.status(200);
    res.sendFile(path.join(dirname(fileURLToPath(import.meta.url)), '../resources/views/login.html'));

});


export {
    router
};