const REG = {
  name: {
    exp: /^[a-zA-Z- ]{3,20}$/,
    msg: "This field can only contain 3:20 alpha, space, hyphen",
  },
  email: {
    exp: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
    msg: "This field expects an email in form: example@domain.com",
  },
  phone: {
    exp: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
    msg: "This field expects a phone number in form: 0123456789",
  },
  password: {
    exp: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
    msg: "Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character",
  },
};

document.getElementById("mode").addEventListener("change", toggleTheme);
document
  .getElementById("first-name")
  .addEventListener("input", (e) => validate(e, REG.name));
document
  .getElementById("last-name")
  .addEventListener("input", (e) => validate(e, REG.name));
document
  .getElementById("email")
  .addEventListener("input", (e) => validate(e, REG.email));
document
  .getElementById("phone")
  .addEventListener("input", (e) => validate(e, REG.phone));
document
  .getElementById("pwd")
  .addEventListener("input", (e) => validate(e, REG.password));
document
  .getElementById("cnf-pwd")
  .addEventListener("input", (e) => validate(e, REG.password));

function toggleTheme(e) {
  if (this.checked) {
    document.documentElement.className = "dark";
  } else {
    document.documentElement.className = "light";
  }
}

function validate(e, reg) {
  if (reg.exp.test(e.target.value.trim())) {
    e.target.setCustomValidity("");
  } else {
    e.target.setCustomValidity(reg.msg);
    e.target.reportValidity();
  }
  if (
    reg === REG.password &&
    document.getElementById("pwd").value !==
      document.getElementById("cnf-pwd").value
  ) {
    e.target.setCustomValidity("passwords don't match");
    e.target.reportValidity();
  }
}
