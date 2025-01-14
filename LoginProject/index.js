/*
    Algorithm for create an account:
             First name: must not contain any numbers.
             (if statement contains numbers)
             - console.log("Name can not contain numbers")
             (else)
             - except name to the textContent

             Last name : Must not contain any numbers
             (if statment will be the same as First name)

             Username: Can be anything but must not go over 15 chars
             This will be an array
             (if array has more than 15 elements)
             - console.log("Too many chars")
             (else if array has only 3 elemets)
             - console.log("Not enough chars")
             (else)
             - except username to the textContent

             Password: Must have uppercase, lowercase, numbers
                       symbols, and must be in the range of 10-20 characters
             (Password algorithm will be lower)          

             Confirm Password: Must be equal to the password
             (if password is NOT equal to password)
             - console.log("Password's do not match")
             (else) 
             - execpt the password
            -Account has been created!
    Algorithm for login:
         When all entries are "valid," move to Log in page.
            - Use <a> for Onclick="validateForm()" to connect the submit
              button to the Login page.
            - Create <a> for login in HTML
            - Use JavaScript to varifly all are valid
               - if statement, where if validateForm equal true, move to Login page
         Login shoud match the Username and Password, with the create password page.
            - if statment stating that if create username does NOT equal login username return false.
               - state that username's do not match.
            - if statment stating that if create password does NOT equal login password return false.
               - state that password's do not mathch.
         Add trim() method to make sure user enters a value, return invalid when they don't.      
         Onlcick to the submit button when valid.
            - You are Loged in.                     
*/


const lastName = document.getElementById("lastName");

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("registrationForm");

    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault();

            if (validateForm()) {
                console.log("Move to Login Page");
                window.location.href = "Login.html";
            } else {
                console.log("Form validation failed. Please fix the errors.");
            }
        });
    }
});

function validateForm() {

    let output1 = document.getElementById('output1');
    let output2 = document.getElementById('output2');
    let output3 = document.getElementById('output3');
    let output4 = document.getElementById('output4');
    let output5 = document.getElementById('output5');

    const isValidFirstName = fName();
    const isValidLastName = lName();
    const isValidUsername = uName();
    const isValidPassword = Pass();
    const isValidConfirmPassword = cPass();

    if (!isValidFirstName || !isValidLastName || !isValidUsername || !isValidPassword || !isValidConfirmPassword) {
        // Display an error message or handle validation errors
        console.log("Form validation failed. Please fix the errors.");
        return false;
    }
    localStorage.setItem('storedUsername',document.getElementById('username').value);
    localStorage.setItem('storedPassword',document.getElementById('password').value);

        return true; // All validations passed
}
/*
             First name: must not contain any numbers.
             (if statement contains numbers)
             - console.log("Name can not contain numbers")
             (else)
             - except name to the textContent
*/
function fName() {
    const firstName = document.getElementById("firstName").value.trim();
    const firstNameRegex = /^[a-zA-Z]+$/;

        if (firstName === '' || !firstNameRegex.test(firstName)) {
            output1.textContent = "Invalid";
            output1.style.color = "red";
            return false;
        }
        return true;
    }

function lName() {
    const lastName = document.getElementById("lastName").value.trim();
    const output2 = document.getElementById("output2");
    const lastNameRegex = /^[a-zA-Z]+$/;

        if(lastName === '' || !lastNameRegex.test(lastName)) {
            output2.textContent = "invalid"
            output2.style.color = "red";
            return false;
        }
        return true;
    }

/*
             Username: Can be anything but must not go over 15 chars
             This will be an array
             (if array has more than 15 elements)
             - console.log("Too many")
             (else if array has only 3 elemets)
             - console.log("Too little")
             (else)
             - except username to the textContent
*/
function uName() {

    let numbers = /[0-9]/;
    const username = document.getElementById("username").value.trim();
    const output3 = document.getElementById("output3");

    if(username === "") {
        output3.textContent = "invalid";
        output3.style.color = "red";
        return false;
    }
    else if(username.length > 15) {
        output3.textContent = "Too many";
        output3.style.color = "orange";
        return false;
    }
    else if(username.length < 3) {
        output3.textContent = "Too little";
        output3.style.color = "orange";
        return false;
    }
   return true;
}
/*
    Algorithm: Password must contain numbers, upper/lowercase, symbol, 
               can not be more then 30 characters, and needs to be at least 8.
               - Make a boolean value for each set all to true
               - Create an array of values
               - store the elements in a for loop
               - use the test method for each boolean
*/

function Pass() {
    const output4 = document.getElementById("output4");
    const password = document.getElementById("password").value;

    uppercase = /[A-Z]/;
    lowercase = /[a-z]/;
    let numbers =/[0-9]/;
    symbols = /[!@#$%^&*()_+{}:;?]/;

    if(password.length < 6) {
        output4.textContent = "Too short";
        output4.style.color = "orange";
        return false;
    }
    if(password.trim() === "") {
        output4.textContent = "invalid";
        output4.style.color = "red";
        return false;
    }
    else if(!uppercase.test(password)) {
        output4.textContent = "Uppercase not present";
        output4.style.color = "orange";
        return false;
    }
    else if(!lowercase.test(password)) {
        output4.textContent = "Lowercase not present";
        output4.style.color = "orange";
        return false;
    }
    else if(!numbers.test(password)) {
        output4.textContent = "Numbers not present";
        output4.style.color = "orange";
        return false;
    }
    else if(!symbols.test(password)) {
        output4.textContent = "symbols not present";
        output4.style.color = "orange";
        return false;
    }
    return true;
}
/*
Confirm Password: Must be equal to the password
             (if password is NOT equal to password)
             - console.log("Password's do not match")
             (else) 
             - execpt the password
            -Account has been created!
*/

function cPass() {

    let numbers = /[0-9]/;
    const cPassword = document.getElementById("cPassword").value;
    const output5 = document.getElementById("output5");
    const password = document.getElementById("password").value;

    if(cPassword.trim() === "") {
        output5.textContent = "invalid"
        output5.style.color = "red";
        return false;
    }
    else if(cPassword.length !== password.length) {
        output5.textContent = "Don't match";
        output5.style.color = "Orange";
        return false;
    }
    return true;
}
/*
Login shoud match the Username and Password, with the create password page.
            - if statment stating that if create username does NOT equal login username return false.
               - state that username's do not match.
            - if statment stating that if create password does NOT equal login password return false.
               - state that password's do not mathch.
         Add trim() method to make sure user enters a value, return invalid when they don't.      
         Onlcick to the submit button when valid.
            - You are Loged in.
*/
function ValidationLogin() {
    const enteredUsernameElement = document.getElementById("username2");
    const enteredPasswordElement = document.getElementById("password2");
    const output6 = document.getElementById("output6");

    if (!enteredUsernameElement || !enteredPasswordElement || !output6) {
        console.log("Error: One or more elements not found.");
        return false;
    }

    const enteredUsername = enteredUsernameElement.value;
    const enteredPassword = enteredPasswordElement.value;
    const storedUsername = localStorage.getItem("storedUsername");
    const storedPassword = localStorage.getItem("storedPassword");

    if (storedUsername !== enteredUsername || storedPassword !== enteredPassword) {
        output6.textContent = "Invalid username or password";
        output6.style.color = "red";
        return false;
    }

    window.location.href = "UserPage.html";

    console.log("login successful");
    return true;
}

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("loginForm");

    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault();

            if (ValidationLogin()) {
               console.log("login successful");
            } else {
                console.log("Login failed. Please check your credentials.");
            }
        });
    }
});
function userPage() {
    const usernameElement = document.getElementById("username3");
    const storedUsername = localStorage.getItem("storedUsername");

    if(usernameElement && storedUsername)  {
        usernameElement.textContent = `${storedUsername}`;
    }
}