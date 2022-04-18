import { projectManager, load } from "./classes";
import * as components from "./components";

export default function run() {
  setup();
  load();
  show();
}

function show() {
  let main = document.getElementById("content");
  let sidebar = document.getElementById("sidebar");

  let viewsList = components.viewsList(projectManager, main);
  let ProjectList = components.projectList(projectManager, main);
  viewsList.relatedLists.push(ProjectList);
  ProjectList.relatedLists.push(viewsList);

  sidebar.append(viewsList, ProjectList);
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
