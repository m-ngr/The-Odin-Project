export default function run() {
  document.getElementById("theme-btn").addEventListener("click", toggleTheme);
  document
    .getElementById("sidebar-btn")
    .addEventListener("click", toggleSidebar);
}

function toggleTheme() {
  document.documentElement.classList.toggle("dark");
  if (document.documentElement.classList.contains("dark")) {
    this.innerHTML = '<i class="fa-solid fa-moon"></i>';
  } else {
    this.innerHTML = '<i class="fa-solid fa-sun"></i>';
  }
}

function toggleSidebar() {
  document.getElementById("sidebar").classList.toggle("hide");
}
