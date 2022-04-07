import { projectManager, project, task } from "./classes/index";
import * as components from "./components/index";

export default function run() {
  setup();
  // ================ TEST ==========================
  let rt = components.task({
    title: "Js Task Title",
    date: "06/04/2022",
    details: "Task details",
    isCompleted: false,
    isImportant: false,
  });

  document.getElementById("task-list").append(rt);
}

function setup() {
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
