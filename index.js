const mongoose = require('mongoose');
const app = require('./app.js');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

/**** SERVER DATABASE START ****/

// Start Server & Database Connection
// Note the dg114:test part is the user pass for database
// this will need to be hidden perhaps using enviroment variables
// reminder to change
mongoose.connect(process.env.DB_URI)
  .then((err) => {
    console.log('I am connected to the database!');
    app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`));
  })
  .catch((err) => {
    console.log('Could not start/connect to server/database');
    mongoose.disconnect();
  });
