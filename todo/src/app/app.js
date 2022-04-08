import { projectManager, project, task } from "./classes/index";
import * as components from "./components/index";

export default function run() {
  setup();
  // ================ TEST ==========================

  let t1 = task("Js Task Title", "details", "06/04/2022", false);
  let t2 = task("Js Task Title", "details", "06/04/2022", false);
  let t3 = task("Js Task Title", "details", "06/04/2022", false);

  let p = project("JS Project dude");
  p.addTask(t1, t2, t3);

  let pro = components.project(p);

  document.getElementById("content").append(pro);
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
