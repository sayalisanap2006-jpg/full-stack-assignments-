// Password validation
let password = document.getElementById("password");

if (password) {
    password.addEventListener("input", function () {
        let value = password.value;

        if (value.length >= 8) {
            document.getElementById("length").classList.add("valid");
            document.getElementById("length").innerHTML = "✔ At least 8 characters";
        } else {
            document.getElementById("length").classList.remove("valid");
            document.getElementById("length").innerHTML = "✖ At least 8 characters";
        }

        if (/[0-9]/.test(value)) {
            document.getElementById("number").classList.add("valid");
            document.getElementById("number").innerHTML = "✔ At least 1 number";
        } else {
            document.getElementById("number").classList.remove("valid");
            document.getElementById("number").innerHTML = "✖ At least 1 number";
        }

        if (/[!@#$%^&*]/.test(value)) {
            document.getElementById("special").classList.add("valid");
            document.getElementById("special").innerHTML = "✔ At least 1 special character";
        } else {
            document.getElementById("special").classList.remove("valid");
            document.getElementById("special").innerHTML = "✖ At least 1 special character";
        }
    });
}

// Login
let loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        let password = document.getElementById("password").value;

        if (
            password.length >= 8 &&
            /[0-9]/.test(password) &&
            /[!@#$%^&*]/.test(password)
        ) {
            document.getElementById("loginMessage").innerHTML =
                "Login successful! Welcome to Dashboard.";
        } else {
            document.getElementById("loginMessage").innerHTML =
                "Please enter a valid password.";
        }
    });
}

// Sign up
let signupForm = document.getElementById("signupForm");

if (signupForm) {
    signupForm.addEventListener("submit", function (event) {
        event.preventDefault();

        let name = document.getElementById("name").value;
        let password = document.getElementById("signupPassword").value;
        let confirmPassword = document.getElementById("confirmPassword").value;

        if (password !== confirmPassword) {
            document.getElementById("signupMessage").innerHTML =
                "Passwords do not match.";
        } else {
            document.getElementById("signupMessage").innerHTML =
                "Account created successfully, " + name + "!";
        }
    });
}
