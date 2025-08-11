const form = document.getElementById("form");
const firstname_input = document.getElementById("firstname-input");
const email_input = document.getElementById("email");
const password_input = document.getElementById("password");
const repeat_password_input = document.getElementById("repeat-password");
const error_message = document.getElementById("error-message");

form.addEventListener("submit", (e) => {
  let errors = [];

  if (firstname_input) {
    // Signup form validation
    errors = getSignupFormErrors(
      firstname_input.value,
      email_input.value,
      password_input.value,
      repeat_password_input.value
    );
  } else {
    // Login form validation
    errors = getLoginFormErrors(email_input.value, password_input.value);
  }

  if (errors.length > 0) {
    e.preventDefault(); // Prevent form submission
    displayErrors(errors); // Display errors
  }
});

function getSignupFormErrors(firstname, email, password, repeat_password) {
  let errors = [];

  resetErrorStyles([
    firstname_input,
    email_input,
    password_input,
    repeat_password_input,
  ]);

  if (!firstname || firstname.trim() === "") {
    errors.push("First name is required");
    if (firstname_input && firstname_input.parentElement) {
      firstname_input.parentElement.classList.add("incorrect");
    }
  }

  if (!email || email.trim() === "") {
    errors.push("Email is required");
    if (email_input && email_input.parentElement) {
      email_input.parentElement.classList.add("incorrect");
    }
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email && !emailRegex.test(email)) {
    errors.push("Invalid email format");
    if (email_input && email_input.parentElement) {
      email_input.parentElement.classList.add("incorrect");
    }
  }

  if (!password || password.trim() === "") {
    errors.push("Password is required");
    if (password_input && password_input.parentElement) {
      password_input.parentElement.classList.add("incorrect");
    }
  }

  if (password !== repeat_password) {
    errors.push("Passwords do not match");
    if (repeat_password_input && repeat_password_input.parentElement) {
      repeat_password_input.parentElement.classList.add("incorrect");
    }
  }

  return errors;
}

function getLoginFormErrors(email, password) {
  let errors = [];

  resetErrorStyles([email_input, password_input]);

  if (!email || email.trim() === "") {
    errors.push("Email is required");
    if (email_input && email_input.parentElement) {
      email_input.parentElement.classList.add("incorrect");
    }
  }

  if (!password || password.trim() === "") {
    errors.push("Password is required");
    if (password_input && password_input.parentElement) {
      password_input.parentElement.classList.add("incorrect");
    }
  }

  return errors;
}

// Helper function to reset error styles
function resetErrorStyles(inputs) {
  inputs.forEach((input) => {
    if (input && input.parentElement) {
      input.parentElement.classList.remove("incorrect");
    }
  });
}

// Function to display errors
function displayErrors(errors) {
  error_message.innerHTML = errors.map((err) => `<li>${err}</li>`).join(""); // List errors
  error_message.style.color = "red"; // Ensure visibility
  console.log("Errors:", errors); // Debugging: Log errors in the console
}
