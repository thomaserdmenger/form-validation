// -- GLOBAL --
const form = document.querySelector("#form");
const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");
const passwordConfirmInput = document.querySelector("#password-confirmation");
const termsInput = document.querySelector("#terms");
const errorsList = document.querySelector(".errors-list");
const errorsContainer = document.querySelector(".errors");

// -- SUBMIT FORM --
const handleSubmit = (e) => {
  // e.preventDefault();
  const errorsMessages = [];
  clearErrors();

  // Check username's length
  const username = usernameInput.value;
  if (username.length < 6) {
    errorsMessages.push("Username must be at least 6 characters");
    usernameInput.value = "";
  }

  // Check password's length
  const password = passwordInput.value;
  if (password.length < 10) {
    errorsMessages.push("Password must be at least 10 characters");
    passwordInput.value = "";
  }

  // Check password confirmation length
  const passwordConfirmation = passwordConfirmInput.value;
  if (passwordConfirmation !== password) {
    errorsMessages.push("Passwords must match");
    passwordConfirmInput.value = "";
  }

  // Agree to terms
  const isChecked = termsInput.checked;
  if (!isChecked) {
    errorsMessages.push("You must accept the terms");
  }

  // Prevent form from submitting & show errors if there are any errors
  if (errorsMessages.length > 0) {
    e.preventDefault();
    showErrors(errorsMessages);
  }
};

form.addEventListener("submit", handleSubmit);

// Clear all errors
function clearErrors() {
  // Option 1
  // errorsList.innerHTML = "";

  // Option 2
  while (errorsList.children[0] != null) {
    errorsList.removeChild(errorsList.children[0]);
  }

  // Remove the class "show" if there are not any errors
  errorsContainer.classList.remove("show");
}

// Show the error messages on screen
function showErrors(errorMessages) {
  if (errorMessages.length > 0) {
    // Add the show class to the errors container
    errorsContainer.classList.add("show");

    // Add each error to the error-list element
    errorMessages.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      errorsList.appendChild(li);
    });
  }
}
