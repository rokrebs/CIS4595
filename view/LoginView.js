var button = document.getElementById("loginBtn");
var usernameField = document.getElementById("loginUsername");
var passwordField = document.getElementById("loginPassword");


button.addEventListener("click", buttonPressed, false);


function buttonPressed() {
    console.log("Button was pressed!");
    
}

export {
    buttonPressed
};