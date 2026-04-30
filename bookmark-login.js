const passwordInput = document.querySelector(".password_input");
const emailInput = document.querySelector(".email_input"); 
const loginBtn =  document.querySelector(".login-btn");
const errorMsg = document.querySelector(".login-error");

loginBtn.addEventListener("click", loginUser);

function loginUser() { 
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if(!email || !password) { 
        errorMsg.innerHTML = `<p class="error-text">Please fill in all fields</p>`
        return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const foundUser = users.find(user => user.email === email && user.password === password);

    if (foundUser) { 
      
        errorMsg.innerHTML =  `<p style="color: green;">Login successful!</p>`;

        window.location.href = "bookmark-home.html"

    } else { 
        errorMsg.innerHTML = `<p class="error-text">Invalid email or password</p>`;
    }
}