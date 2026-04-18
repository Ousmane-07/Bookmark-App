/* STEP ! ACQUIRE ELEMENTS */

const fullNameInput = document.querySelector(".full_name_input");
const emailInput = document.querySelector(".email_input");
const passwordInput = document.querySelector(".password_input")
const createAccountBtn = document.querySelector(".login-btn");
const errorSignupMsg = document.querySelector(".signup-error");


// STEP 2
// Checks to see if there's no key named "user", and creates one 
// using the const defaultUser

// In simple terms, If you try to get a key named "user", and there isn't one, 
// Assign one with this if statement.

if(!localStorage.getItem("users")) { 
    const defaultUser = [
        {
    username: "dummy123", 
    email: "hellothere@gmail.com",
    password: "password123"
    }
];

    localStorage.setItem("users", JSON.stringify(defaultUser));
}

// STEP 3
// Create an addEventListener and a function  with the sign up button
// With this button, run the function "createAccount()"


createAccountBtn.addEventListener("click", createAccount);

function createAccount() { 
    const name_signUp = fullNameInput.value.trim()
    const email_signUp = emailInput.value.trim()
    const password_signUp = passwordInput.value.trim();

    if(!name_signUp || !email_signUp || !password_signUp) { 

        // If any of the fields are null, display an error 
        // message and return the function
        errorSignupMsg.innerHTML = `<p class="error-text">You must enter all fields</p>`;
        return;
    } 

    let users = JSON.parse(localStorage.getItem("users")) || [];

        // ELSE, create an object with the input within it, and 
        // use localStorage.setItem to set the values of {name, email, password},
        // within the "user" key.
    
    const newUser = { 
        name: name_signUp,
        email: email_signUp,
        password: password_signUp

    }

    users.push(newUser);

    // ADD THE DATA TO THE LOCAL STORAGE UNDER THE KEY "USER"
    
    localStorage.setItem("users", JSON.stringify(users));
    

    errorSignupMsg.innerHTML = `<p style="color: green;">Account created!</p>`;

    }
