import { normalButton, binaryButton } from "../index";
import { partial } from "../../utils/index";
import "./index.css";

export function task(taskInfo, deleteEvent) {
  const taskWrapper = document.createElement("li");
  const taskElement = document.createElement("details");
  const headElement = document.createElement("summary");
  const bodyElement = document.createElement("p");

  taskWrapper.className = "task-item";

  bodyElement.innerText = taskInfo.details;

  headElement.append(
    checkButton(taskInfo.isCompleted, partial(checkEvent, taskInfo)),
    titleElement(taskInfo.title),
    dateElement(taskInfo.date),
    importantButton(taskInfo.isImportant, partial(importantEvent, taskInfo)),
    editButton(),
    deleteButton(deleteEvent.bind(taskWrapper, taskInfo))
  );

  taskElement.append(headElement, bodyElement);
  taskWrapper.append(taskElement);
  return taskWrapper;
}

function checkButton(checked, clickEvent) {
  return binaryButton(
    checked,
    {
      title: "Unmark as completed",
      faIconHTML: '<i class="fa-solid fa-circle-check"></i>',
    },
    {
      title: "Mark as completed",
      faIconHTML: '<i class="fa-regular fa-circle"></i>',
    },
    clickEvent
  );
}

function checkEvent(taskInfo, event) {
  event.preventDefault();
  taskInfo.isCompleted = this.state;
}

function titleElement(title = "") {
  const element = document.createElement("p");
  element.innerText = title;
  return element;
}

function dateElement(date = "") {
  const element = document.createElement("p");
  element.innerText = date;
  return element;
}

function importantButton(isImportant = false, clickEvent) {
  return binaryButton(
    isImportant,
    {
      title: "Unmark as important",
      faIconHTML: '<i class="fa-solid fa-star"></i>',
    },
    {
      title: "Mark as important",
      faIconHTML: '<i class="fa-regular fa-star"></i>',
    },
    clickEvent
  );
}

function importantEvent(taskInfo, event) {
  event.preventDefault();
  taskInfo.isImportant = this.state;
}

function editButton() {
  return normalButton(
    "Edit",
    '<i class="fa-solid fa-pen-to-square"></i>',
    null
  );
}

function deleteButton(clickEvent) {
  return normalButton(
    "Delete",
    '<i class="fa-solid fa-xmark"></i>',
    clickEvent
  );
}
