import {mongoose} from 'mongoose';

// Define Schema (Only an example one for now)
const studentSchema = new mongoose.Schema ({name: String, age: Number});
const Student = mongoose.model('Student', studentSchema);

/** Saved a student to database to test (Did work)
 * const newStudent = new Student({name: "Dean", age: 23});
 * newStudent.save();
 */

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