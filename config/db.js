const mongoose = require('mongoose');

// Start Server & Database Connection
// Note the dg114:test part is the user pass for database
// this will need to be hidden perhaps using enviroment variables
// reminder to change
const db = mongoose.connect('mongodb+srv://dg114:test@cluster0.iwvkvt3.mongodb.net/?retryWrites=true&w=majority')
.then((err) => {
    console.log("I am connected to the database!");

})
.catch((err)=>{
    console.log("Could not start/connect to server/database");   
    mongoose.disconnect();
});

module.exports = db;
