import {mongoose} from 'mongoose';
import bcrypt from 'bcrypt'
import { db } from '../config/db.js';

// Define Schema (Only an example one for now)
const studentSchema = new mongoose.Schema ({name: String, user: String, pass: String});
const Student = mongoose.model('Student', studentSchema);


// Query for the saved student
const query = function() {
    Student.find({name: 'Dean'}, function(err,docs) {
        console.log("Query return for \"name: Dean\"\n" + docs);
    });
    
    mongoose.disconnect();
}


export {
    query
};