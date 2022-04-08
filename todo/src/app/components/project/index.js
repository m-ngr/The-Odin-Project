import "./index.css";
import { task } from "../index";
import { partial } from "../../utils";

export function project(projectInfo) {
  const projectWrapper = document.createElement("div");
  const titleElement = document.createElement("h2");
  const taskListElement = document.createElement("ul");
  const addTaskButton = document.createElement("button");

  projectWrapper.className = "project";

  titleElement.innerText = projectInfo.title;
  taskListElement.className = "tasks";

  projectInfo.tasks.forEach((taskInfo) => {
    taskListElement.append(task(taskInfo, partial(deleteEvent, projectInfo)));
  });

  addTaskButton.className = "add-btn";
  addTaskButton.innerHTML =
    '<i class="fa-solid fa-plus"></i> <span>Add Task</span>';

  projectWrapper.append(titleElement, taskListElement, addTaskButton);
  return projectWrapper;
}

function deleteEvent(projectInfo, taskInfo, event) {
  event.preventDefault();
  projectInfo.removeTask(taskInfo);
  this.remove();
}
