import { iconButton, binaryButton } from "../../elements";
import { taskForm } from "../task_form";
import "./index.css";

/**
 * @param {{title:String,
 *          dueDate:Date,
 *          details:String,
 *          isCompleted:Boolean,
 *          isImportant: Boolean}} taskObj
 *
 * @param {(taskObj: taskObj, ev: MouseEvent) => any} deleteEvent
 */

export function task(taskObj, deleteEvent, viewMode) {
  const element = document.createElement("section");
  const taskElement = document.createElement("details");
  const headElement = document.createElement("summary");
  const bodyElement = document.createElement("p");

  element.className = "task-element";
  bodyElement.className = "task-details";

  element.checkButton = checkButton(taskObj);
  element.titleElement = textElement("limited-text task-title");
  element.dateElement = textElement("task-date");
  element.importantButton = importantButton(taskObj);
  element.detailsElement = bodyElement;

  element.load = load.bind(element);

  element.load(taskObj);

  headElement.append(
    element.checkButton,
    element.titleElement,
    element.dateElement,
    element.importantButton
  );

  if (viewMode === false) {
    element.editButton = editButton(element, taskElement, taskObj);
    element.deleteButton = deleteButton(element, taskObj, deleteEvent);

    headElement.append(element.editButton, element.deleteButton);
  }

  taskElement.append(headElement, bodyElement);
  element.append(taskElement);

  return element;
}

function load(taskObj) {
  this.checkButton.setState(taskObj.isCompleted);
  this.titleElement.innerText = taskObj.title;
  this.titleElement.title = taskObj.title;
  this.dateElement.innerText = taskObj.dueDate.toLocaleDateString("en-GB");
  this.importantButton.setState(taskObj.isImportant);
  this.detailsElement.innerText = taskObj.details;
}

function checkButton(taskObj) {
  function stateChange(state, event) {
    if (event) event.preventDefault();
    taskObj.isCompleted = state;
  }

  const button = binaryButton(
    stateChange,
    taskObj.isCompleted,
    {
      title: "Unmark as completed",
      faIconHTML: '<i class="fa-solid fa-circle-check"></i>',
      className: "task-completed",
    },
    {
      title: "Mark as completed",
      faIconHTML: '<i class="fa-regular fa-circle"></i>',
    }
  );

  button.classList.add("task-completed-btn");

  return button;
}

function textElement(className, title) {
  const element = document.createElement("p");
  if (className) element.className = className;
  if (title) element.innerText = title;
  return element;
}

function importantButton(taskObj) {
  function stateChange(state, event) {
    if (event) event.preventDefault();
    taskObj.isImportant = state;
  }

  const button = binaryButton(
    stateChange,
    taskObj.isImportant,
    {
      title: "Unmark as important",
      faIconHTML: '<i class="fa-solid fa-star"></i>',
      className: "task-important",
    },
    {
      title: "Mark as important",
      faIconHTML: '<i class="fa-regular fa-star"></i>',
    }
  );

  button.classList.add("task-important-btn");

  return button;
}

function editButton(element, taskElement, taskObj) {
  function cancelEvent() {
    taskElement.style.display = "";
  }

  function updateEvent(result) {
    taskObj.title = result.title;
    taskObj.details = result.details;
    taskObj.dueDate = result.dueDate;
    taskObj.isImportant = result.isImportant;
    element.load(taskObj);
    taskElement.style.display = "";
  }

  function clickEvent(event) {
    if (event) event.preventDefault();
    const form = taskForm(updateEvent, cancelEvent, "Update", taskObj);
    taskElement.style.display = "none";
    element.append(form);
  }

  const button = iconButton(
    "Edit",
    '<i class="fa-solid fa-pen-to-square"></i>',
    clickEvent
  );

  button.className = "edit-ibtn";

  return button;
}

function deleteButton(element, taskObj, deleteEvent) {
  function clickEvent(event) {
    if (event) event.preventDefault();
    if (deleteEvent) deleteEvent.call(element, taskObj, event);
    element.remove();
  }

  const button = iconButton(
    "Delete",
    '<i class="fa-solid fa-xmark"></i>',
    clickEvent
  );

  button.className = "delete-ibtn";
  return button;
}
