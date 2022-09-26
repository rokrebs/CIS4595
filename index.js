const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

app.use(express.static("res"));

app.get('/', (req, res) => {

    res.status(200);
    res.sendFile(path.join(__dirname, 'res/login.html'));

});

// Start Server & Database Connection
// Note the dg114:test part is the user pass for database
// this will need to be hidden perhaps using enviroment variables
// reminder to change
mongoose.connect('mongodb+srv://dg114:test@cluster0.iwvkvt3.mongodb.net/?retryWrites=true&w=majority')
.then(()=>{
    app.listen(PORT, ()=>{
        console.log("Database & Server started and listening on port " + PORT);
    })
})
.catch((err)=>{
    console.log("Could not start/connect to server/database");   
})

// Define Schema (Only an example one for now)
const studentSchema = new mongoose.Schema ({name: String, age: Number});
const Student = mongoose.model('Student', studentSchema);

/** Saved a student to database to test (Did work)
 * const newStudent = new Student({name: "Dean", age: 23});
 * newStudent.save();
 */

// Query for the saved student
Student.find({name: 'Dean'}, function(err,docs) {
    console.log("Query return for \"name: Dean\"\n" + docs);
});