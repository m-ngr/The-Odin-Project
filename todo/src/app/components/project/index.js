import "./index.css";
import { iconTextButton, listElement } from "../../elements";
import { task as taskElement } from "../task";
import { partial } from "../../utils";
import { taskForm } from "../task_form";
import { task as taskObject } from "../../classes";

export function project(projectObj, viewMode) {
  const element = listElement(projectObj.title, [], {
    titleClass: "project-title",
  });

  element.classList.add("project");

  showTasks(element, projectObj, viewMode);

  if (viewMode === false) {
    const addButton = iconTextButton(
      "Add Task",
      '<i class="fa-solid fa-plus"></i>',
      partial(showAddForm, element, projectObj, viewMode)
    );

    addButton.classList.add("add-task-btn");

    element.append(addButton);
  }

  return element;
}

function showTasks(element, projectObj, viewMode) {
  element.removeAll();

  const taskElements = projectObj.tasks.map((taskObj) =>
    taskElement(taskObj, partial(deleteEvent, element, projectObj), viewMode)
  );

  element.addElements(...taskElements);
}

function deleteEvent(element, projectObj, taskObj, event) {
  if (event) event.preventDefault();
  projectObj.removeTask(taskObj);
  element.removeElements(this.parentElement);
}

function showAddForm(element, projectObj, viewMode) {
  const button = this;

  function addEvent(result) {
    const newTask = taskObject(
      result.title,
      result.details,
      result.dueDate,
      result.isImportant
    );
    projectObj.addTask(newTask);
    showTasks(element, projectObj, viewMode);
    button.style.display = "";
  }

  function cancelEvent() {
    button.style.display = "";
  }

  const form = taskForm(addEvent, cancelEvent);
  element.insertBefore(form, button);
  button.style.display = "none";
}
