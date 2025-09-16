let form = document.forms.loginForm;

form.addEventListener("submit", (e) => {
  e.preventDefault(); // stop reload
  console.log("Username:", form.username.value);
  console.log("Password:", form.password.value);
  form.reset()
});
