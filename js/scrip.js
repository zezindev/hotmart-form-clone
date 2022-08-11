let password = document.querySelector("input[type='password']");
let checkbox = document.querySelector("input[type='checkbox']");

checkbox.addEventListener("change", function (event) {
  if (checkbox.checked) {
    password.type = "text";
  } else {
    password.type = "password";
  }
});
