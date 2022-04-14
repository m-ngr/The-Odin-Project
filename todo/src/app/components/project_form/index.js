import "./index.css";

/**
 * @todo change all classNames to project-form
 * @todo style the component
 */

/**
 *
 * @param {(result:{title: String}, ev: MouseEvent) => any} submitEvent
 * @param {(ev: MouseEvent)=> any} cancelEvent
 * @param {string} submitButtonTitle
 * @param {{title: String}} projectObj
 * @returns
 */

export function projectForm(
  submitEvent,
  cancelEvent,
  submitButtonTitle,
  projectObj
) {
  const form = document.createElement("form");
  const titleIn = titleInput();

  const buttons = controls(
    addEvent.bind(form, submitEvent),
    closeEvent.bind(form, cancelEvent),
    submitButtonTitle || "Add"
  );

  form.titleInput = titleIn.inputElement;

  form.autocomplete = "off";
  form.className = "task-form";
  form.load = load.bind(form);

  if (projectObj) form.load(projectObj);

  form.append(titleIn, buttons);
  return form;
}

function load(projectObj) {
  this.titleInput.value = projectObj.title;
}

function titleInput() {
  const element = document.createElement("div");
  element.labelElement = document.createElement("label");
  element.inputElement = document.createElement("input");

  element.labelElement.innerText = "Title:";
  element.labelElement.setAttribute("for", "task-form-title");
  element.inputElement.id = "task-form-title";
  element.inputElement.type = "text";
  element.inputElement.required = true;

  element.className = "task-form-input";

  element.append(element.labelElement, element.inputElement);
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

  element.className = "task-form-controls";

  element.append(addButton, cancelButton);
  return element;
}

function addEvent(externalEvent, event) {
  if (this.checkValidity()) {
    event.preventDefault();
    const result = {
      title: this.titleInput.value,
    };
    if (externalEvent) externalEvent.call(this, result, event);
    this.remove();
  }
}

function closeEvent(externalEvent, event) {
  if (externalEvent) externalEvent.call(this, event);
  this.remove();
}
