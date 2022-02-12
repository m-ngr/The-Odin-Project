document.getElementById("mode").addEventListener("change", toggleTheme);

document.getElementById("pwd").addEventListener("input", matchPwd);
document.getElementById("cnf-pwd").addEventListener("input", matchPwd);

function toggleTheme(e) {
  if (this.checked) {
    document.documentElement.className = "dark";
  } else {
    document.documentElement.className = "light";
  }
}

function matchPwd(e) {
  const pwd1 = document.getElementById("pwd");
  const pwd2 = document.getElementById("cnf-pwd");
  const out = document.querySelector('output[for="cnf-pwd"]');
  if (pwd1.validity.valid && pwd2.value !== "" && pwd1.value !== pwd2.value) {
    out.style.height = "auto";
    out.style.visibility = "visible";
    pwd2.style.borderColor = "red";
  } else {
    out.style.height = "0";
    out.style.visibility = "hidden";
    pwd2.style.borderColor = "";
  }
}
