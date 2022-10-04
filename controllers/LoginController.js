import {mongoose} from 'mongoose';
import path, { dirname } from 'path';
import {fileURLToPath} from 'url';



const loginView = (req, res) => {

    res.status(200);
    res.sendFile(path.join(dirname(fileURLToPath(import.meta.url)), '../resources/HTML/login.html'));

};

const handleLogin = (req, res) => {

    let username = req.body.username;
    let password = req.body.password;
    loginQuery(username, password);
    res.send(`Username: ${username} Password: ${password}`);

};

export {
    loginView,
    handleLogin
};