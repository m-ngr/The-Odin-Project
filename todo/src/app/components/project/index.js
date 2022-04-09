import "./index.css";
import { task, titledList, itButton } from "../index";
import { partial } from "../../utils";

export function project(projectInfo) {
  const taskElements = projectInfo.tasks.map((taskInfo) =>
    task(taskInfo, partial(deleteEvent, projectInfo))
  );
  const projectElement = titledList(projectInfo.title, 2, ...taskElements);

  projectElement.classList.add("project");

  const addButton = itButton("Add Task", '<i class="fa-solid fa-plus"></i>');
  addButton.classList.add("add-btn");

  projectElement.append(addButton);
  return projectElement;
}

function deleteEvent(projectInfo, taskInfo, event) {
  event.preventDefault();
  projectInfo.removeTask(taskInfo);
  this.remove();
}
