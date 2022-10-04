import {mongoose} from 'mongoose';
import bcrypt from 'bcrypt'
//import { db } from '../config/db.js';
// Define Schema (Only an example one for now)
const studentSchema = new mongoose.Schema ({name: String, user: String, pass: String});
const Student = mongoose.model('Student', studentSchema);

/// Saved a student to database to test (Did work)
//var salt = bcrypt.genSaltSync(10);
//var hash = bcrypt.hashSync("abcd",salt);
//const newStudent = new Student({name: "Dean Golden", user: "dg1", pass: hash});
//newStudent.save();


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
