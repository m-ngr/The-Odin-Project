import { task, project, projectManager } from "./classes";
import * as elements from "./elements";

/**
 * @todo change all CSS class names to a unique working group with a naming convension
 */

export function devTestTool() {
  load();
  let main = document.getElementById("content");

  main.append(renderViewsList());
}

function renderViewsList() {
  let x = elements.listElement("Home", [
    elements.iconTextButton(
      "All Tasks",
      '<i class="fa-solid fa-list-check"></i>',
      () => {
        console.log(viewAllFilter());
      }
    ),
  ]);

  return x;
}

function tc() {
  const t = document.createElement("p");
  t.innerText = "Test Component";
  return t;
}

function viewAllFilter() {
  let viewAll = projectManager.filter((tsk) => {
    return tsk.isCompleted === false;
  });
  return viewAll;
}

function viewImportantFilter() {
  let viewAll = projectManager.filter((tsk) => {
    return tsk.isImportant === true;
  });
  return viewAll;
}

function load() {
  projectManager.addProject(...generateProjects(3, 4));
  projectManager.projects[0].tasks[0].isCompleted = true;
  projectManager.projects[0].tasks[1].isCompleted = true;
  projectManager.projects[0].tasks[2].isImportant = true;
  projectManager.projects[2].tasks[3].isCompleted = true;
}

function generateProjects(n = 1, t = 4) {
  let projs = [];
  for (let i = 1; i <= n; ++i) {
    let p = project(`Project ${i}`);
    p.addTask(...generateTasks(t));
    projs.push(p);
  }
  return projs;
}

function generateTasks(n = 1) {
  let tasks = [];
  for (let i = 1; i <= n; ++i) {
    tasks.push(
      task(`Task ${i} Title`, `Task ${i} Details`, new Date().toJSON(), false)
    );
  }
  return tasks;
}
