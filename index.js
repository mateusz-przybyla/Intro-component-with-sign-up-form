var submitButton = document.querySelector('input[type="submit"]');
var firstName = document.getElementById("f-name");
var lastName = document.getElementById("l-name");
var email = document.getElementById("email");
var password = document.getElementById("password");

firstName.addEventListener("blur", function () {
  if (firstName.value !== "") {
    document.querySelector(".nr1").innerHTML = "";
    firstName.classList.remove("emptyTextBox");
  }
});

lastName.addEventListener("blur", function () {
  if (lastName.value !== "") {
    document.querySelector(".nr2").innerHTML = "";
    lastName.classList.remove("emptyTextBox");
  }
});

email.addEventListener("blur", function () {
  if (email.value !== "" && validateEmail(email.value)) {
    document.querySelector(".nr3").innerHTML = "";
    email.classList.remove("emptyTextBox", "ph-color");
  } else {
    document.querySelector(".nr3").innerHTML = "Look like this is not an email";
    email.classList.add("emptyTextBox", "ph-color");
    email.placeholder = "email@example/com";
  }
});

password.addEventListener("blur", function () {
  if (password.value !== "") {
    document.querySelector(".nr4").innerHTML = "";
    password.classList.remove("emptyTextBox");
  }
});

submitButton.addEventListener("click", function () {
  if (firstName.value === "") {
    document.querySelector(".nr1").innerHTML = "First Name cannot be empty";
    firstName.classList.add("emptyTextBox");
    firstName.placeholder = "";
  } else {
    document.querySelector(".nr1").innerHTML = "";
    firstName.classList.remove("emptyTextBox");
  }

  if (lastName.value === "") {
    document.querySelector(".nr2").innerHTML = "Last Name cannot be empty";
    lastName.classList.add("emptyTextBox");
    lastName.placeholder = "";
  } else {
    document.querySelector(".nr2").innerHTML = "";
    lastName.classList.remove("emptyTextBox");
  }

  if (!validateEmail(email.value)) {
    document.querySelector(".nr3").innerHTML = "Look like this is not an email";
    email.classList.add("emptyTextBox", "ph-color");
    email.placeholder = "email@example/com";
  } else {
    document.querySelector(".nr3").innerHTML = "";
    email.classList.remove("emptyTextBox", "ph-color");
  }

  if (password.value === "") {
    document.querySelector(".nr4").innerHTML = "Password cannot be empty";
    password.classList.add("emptyTextBox");
    password.placeholder = "";
  } else {
    document.querySelector(".nr4").innerHTML = "";
    password.classList.remove("emptyTextBox");
  }
});

function validateEmail(value) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (value.match(mailformat)) {
    return true;
  } else {
    return false;
  }
}
