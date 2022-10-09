import {mongoose} from 'mongoose';
import bcrypt from 'bcrypt'
import { db } from '../config/db.js';

// Define Schema (Only an example one for now)
const studentSchema = new mongoose.Schema ({name: String, user: String, pass: String});
const Student = mongoose.model('Student', studentSchema);

// Query for the logging student
const login = function(userName, password) {
    Student.find({user: userName}, 'pass', function(err,docs) {
        var hashedPass = docs[0]['pass'];
        console.log(bcrypt.compareSync(password,hashedPass));
    });
    
    mongoose.disconnect();
}

//test
login('dg1','abcd');

export {
    login
};