import { binaryTextButton } from "../../elements";
import "./index.css";
/**
 *
 * @param {(result:{title: String, details: String, dueDate: Date, isImportant: Boolean},
 *          ev: MouseEvent) => any} submitEvent
 * @param {(ev: MouseEvent)=> any} cancelEvent
 * @param {string} submitButtonTitle
 * @param {{title: String, details: String, dueDate: Date, isImportant: Boolean}} taskObj
 * @returns
 */
export function taskForm(submitEvent, cancelEvent, submitButtonTitle, taskObj) {
  const form = document.createElement("form");
  const titleIn = titleInput(form);
  const detailsIn = detailsInput(form);
  const dateIn = dateInput(form);
  const importantIn = importantInput(form);
  const buttons = controls(
    addEvent.bind(form, submitEvent),
    closeEvent.bind(form, cancelEvent),
    submitButtonTitle || "Add"
  );

  form.autocomplete = "off";
  form.className = "add-form task-form";
  form.load = load.bind(form);

  if (taskObj) form.load(taskObj);

  form.append(titleIn, detailsIn, dateIn, importantIn, buttons);
  return form;
}

function load(taskObj) {
  this.titleInput.value = taskObj.title;
  this.detailsInput.value = taskObj.details;
  this.dateInput.valueAsDate = taskObj.dueDate;
  this.importantInput.setState(taskObj.isImportant);
}

function titleInput(form) {
  const element = document.createElement("div");
  const label = document.createElement("label");
  const input = document.createElement("input");

  label.innerText = "Title:";
  label.setAttribute("for", "task-form-title");
  input.id = "task-form-title";
  input.type = "text";
  input.required = true;

  element.className = "form-input";

  element.append(label, input);
  form.titleInput = input;
  return element;
}

function detailsInput(form) {
  const element = document.createElement("div");
  const label = document.createElement("label");
  const input = document.createElement("textarea");

  label.innerText = "Details(optional):";
  label.setAttribute("for", "task-form-details");
  input.id = "task-form-details";

  element.className = "form-input";

  element.append(label, input);
  form.detailsInput = input;
  return element;
}

function dateInput(form) {
  const element = document.createElement("div");
  const label = document.createElement("label");
  const input = document.createElement("input");

  label.innerText = "Date:";
  label.setAttribute("for", "task-form-date");
  input.id = "task-form-date";
  input.type = "date";
  input.required = true;

  element.className = "form-input";

  element.append(label, input);
  form.dateInput = input;
  return element;
}

function importantInput(form) {
  const element = document.createElement("div");
  const button = binaryTextButton(
    null,
    false,
    {
      title: "Mark as Important",
      faIconHTML: '<i class="fa-solid fa-star"></i>',
      className: "form-important-checked",
    },
    {
      title: "Mark as Important",
      faIconHTML: '<i class="fa-regular fa-star"></i>',
    }
  );
  element.classList.add("form-important");
  button.type = "button";
  element.append(button);
  form.importantInput = button;
  return element;
}

function controls(addEvent, closeEvent, submitButtonTitle) {
  const element = document.createElement("div");
  const addButton = document.createElement("button");
  const cancelButton = document.createElement("button");

  addButton.innerText = submitButtonTitle || "Add";
  cancelButton.innerText = "Cancel";
  cancelButton.type = "button";

  addButton.addEventListener("click", addEvent);
  cancelButton.addEventListener("click", closeEvent);

  element.className = "form-controls";
  addButton.classList.add("form-add-btn", "hover");
  cancelButton.classList.add("form-cancel-btn", "hover");

  element.append(addButton, cancelButton);
  return element;
}

function addEvent(externalEvent, event) {
  if (this.checkValidity()) {
    event.preventDefault();
    const result = {
      title: this.titleInput.value,
      details: this.detailsInput.value,
      dueDate: this.dateInput.valueAsDate,
      isImportant: this.importantInput.getState(),
    };
    if (externalEvent) externalEvent.call(this, result, event);
    this.remove();
  }
}

function closeEvent(externalEvent, event) {
  if (externalEvent) externalEvent.call(this, event);
  this.remove();
}
