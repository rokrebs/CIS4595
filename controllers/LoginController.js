import bodyParser from 'body-parser';
import { mongoose } from 'mongoose';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import validationResult from 'express-validator';
import { studentModel } from '../models/StudentModel.js';
import * as bcrypt from 'bcrypt';


// Get request for login page
function loginView(req, res) {
  res.status(200);
  res.sendFile(path.join(dirname(fileURLToPath(import.meta.url)), '../resources/HTML/login.html'));
}

//Post request for logging in users
const handleLogin =  async (req, res) => {
    try{
        console.log(req.body);
        const { username, password } = req.body;
        

        let student = await studentModel.findOne({user: username});

        //Checks for user in database
        if(!student){
           return res.status(401).json({ message: "Invalid Credentials" });
        }

        //Checks for valid password
        bcrypt.compare(password, student.pass, (err, result) => {
            
            if (result) {
              return res.status(200).json({ message: "User Logged in Successfully" });
            }
            
            console.log(err);

        
            return res.status(401).json({ message: "Invalid Credentials" });
        });
    } catch (error) {
        res.status(401).send(error.message);
        console.log("Error in db");
    }
};

function updateCoursesComponent(numCourses, courses)
{
    for(i = 0; i < numCourses; i++){
	    var newLi = document.createElement("li");
	    newLi.className = "courseList";
        newLi.innerHTML = `<li> 
            <div class="card text-white bg-secondary mb-3" style="max-height: 10vh;">
                <h3 class="card-title-top">${courses[i].courseName}</h3>
                <div class="card-body">
                    <p class="card-text ">${courses[i].courseDescription}</p>
                </div>
            </div>
        </li>`;
	    list.appendChild(newLi);

    }
}

export {
  loginView,
  handleLogin,
};
