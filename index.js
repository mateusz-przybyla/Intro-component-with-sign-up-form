var submitButton = document.querySelector('input[type="submit"]');
var firstName = document.getElementById("f-name");
var lastName = document.getElementById("l-name");
var email = document.getElementById("email");
var password = document.getElementById("password");

firstName.addEventListener("blur", function () {
  if (firstName.value === "") {
    document.querySelector(".nr1").innerHTML = "First Name cannot be empty";
  }
});

lastName.addEventListener("blur", function () {
  if (lastName.value === "") {
    document.querySelector(".nr2").innerHTML = "Last Name cannot be empty";
  }
});

email.addEventListener("blur", function () {
  if (email.value === "") {
    document.querySelector(".nr3").innerHTML = "Look like this is not an email";
    email.classList.add("ph-color");
    email.placeholder = "email@example/com";
  }
});

password.addEventListener("blur", function () {
  if (password.value === "") {
    document.querySelector(".nr4").innerHTML = "Password cannot be empty";
  }
});

submitButton.addEventListener("click", function () {
  if (firstName.value === "") {
    document.querySelector(".nr1").innerHTML = "First Name cannot be empty";
    firstName.classList.add("emptyTextBox");
    firstName.placeholder = "";
  }
  if (lastName.value === "") {
    document.querySelector(".nr2").innerHTML = "Last Name cannot be empty";
    lastName.classList.add("emptyTextBox");
    lastName.placeholder = "";
  }

  if (email.value === "") {
    document.querySelector(".nr3").innerHTML = "Look like this is not an email";
    email.classList.add("emptyTextBox", "ph-color");
    email.placeholder = "email@example/com";
  }

  if (password.value === "") {
    document.querySelector(".nr4").innerHTML = "Password cannot be empty";
    password.classList.add("emptyTextBox");
    password.placeholder = "";
  }
});
