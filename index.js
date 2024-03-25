var submitButton = document.querySelector('input[type="submit"]');
var firstName = document.getElementById("f-name");
var lastName = document.getElementById("l-name");
var email = document.getElementById("email");
var password = document.getElementById("password");

firstName.addEventListener("blur", function () {
  if (firstName.value === "") {
    document.querySelector(".nr1").innerHTML = "First Name cannot be empty";
    document.querySelector(".nr1").classList.add("info");
    document.querySelector(".nr1").classList.add("info");
  }
});

lastName.addEventListener("blur", function () {
  if (lastName.value === "") {
    document.querySelector(".nr2").innerHTML = "Last Name cannot be empty";
    document.querySelector(".nr2").classList.add("info");
  }
});

email.addEventListener("blur", function () {
  if (email.value === "") {
    document.querySelector(".nr3").innerHTML = "Look like this is not an email";
    document.querySelector(".nr3").classList.add("info");
    email.placeholder = "email@example/com";
  }
});

password.addEventListener("blur", function () {
  if (password.value === "") {
    document.querySelector(".nr4").innerHTML = "Password cannot be empty";
    document.querySelector(".nr4").classList.add("info");
  }
});

submitButton.addEventListener("click", function () {
  if (firstName.value === "") {
    document.querySelector(".nr1").innerHTML = "First Name cannot be empty";
    document.querySelector(".nr1").classList.add("info");
    firstName.classList.add("emptyTextBox");
  }

  if (lastName.value === "") {
    document.querySelector(".nr2").innerHTML = "Last Name cannot be empty";
    document.querySelector(".nr2").classList.add("info");
    lastName.classList.add("emptyTextBox");
  }

  if (email.value === "") {
    document.querySelector(".nr3").innerHTML = "Look like this is not an email";
    document.querySelector(".nr3").classList.add("info");
    email.placeholder = "email@example/com";
    email.classList.add("emptyTextBox");
  }

  if (password.value === "") {
    document.querySelector(".nr4").innerHTML = "Password cannot be empty";
    document.querySelector(".nr4").classList.add("info");
    password.classList.add("emptyTextBox");
  }
});
