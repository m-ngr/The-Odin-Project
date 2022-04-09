import { projectManager, project, task } from "./classes/index";
import * as components from "./components/index";
import { devTestTool } from "./test";

export default function run() {
  setup();
  devTestTool();
  // ================ TEST ==========================

  // let t1 = task("Js Task Title", "details", "06/04/2022", false);
  // let t2 = task("Js Task Title", "details", "06/04/2022", false);
  // let t3 = task("Js Task Title", "details", "06/04/2022", false);

  // let p1 = project("Project 1");
  // p1.addTask(t1, t2, t3);
  // let p2 = project("Project 2");

  // let pm = projectManager;
  // pm.addProject(p1);
  // pm.addProject(p2);
  // pm.selected = p1;

  // document.getElementById("sidebar").append(components.projectList(pm));

  // document.getElementById("content").append(components.project(pm.selected));
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
