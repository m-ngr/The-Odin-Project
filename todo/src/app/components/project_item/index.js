import { iconButton, iconTextButton } from "../../elements";
import { projectForm } from "../project_form";
import "./index.css";

/**
 * @param {{title:String}} projectObj
 * @param {(projectObj: projectObj, ev: MouseEvent) => any} clickEvent
 * @param {(projectObj: projectObj, ev: MouseEvent) => any} deleteEvent
 * @param {(projectObj: projectObj, ev: MouseEvent) => any} updateEvent
 */

export function projectItem(projectObj, clickEvent, deleteEvent, updateEvent) {
  const element = document.createElement("div");
  const controls = document.createElement("div");

  element.className = "project-item";
  controls.className = "project-item-controls";

  element.projectItem = iconTextButton(
    projectObj.title,
    '<i class="fa-solid fa-table-list"></i>',
    clickEvent.bind(element, projectObj)
  );
  element.load = load.bind(element);

  element.load(projectObj);

  controls.append(
    editButton(
      element,
      projectObj,
      setDisplay.bind(element, [element.projectItem, controls], true),
      setDisplay.bind(element, [element.projectItem, controls], false),
      updateEvent
    ),
    deleteButton(element, projectObj, deleteEvent)
  );
  element.append(element.projectItem, controls);
  return element;
}

function load(projectObj) {
  this.projectItem.title = projectObj.title;
  this.projectItem.titleElement.innerText = projectObj.title;
}

function setDisplay(elements = [], show) {
  elements.forEach((ele) => {
    if (show) {
      ele.style.display = "";
    } else {
      ele.style.display = "none";
    }
  });
}

function editButton(element, projectObj, show, hide, externalUpdateEvent) {
  function cancelEvent() {
    show();
  }

  function updateEvent(result, event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    projectObj.title = result.title;
    element.load(projectObj);
    show();
    if (externalUpdateEvent)
      externalUpdateEvent.call(element, projectObj, event);
  }

  function clickEvent(event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    const form = projectForm(updateEvent, cancelEvent, "Update", projectObj);
    hide();
    element.append(form);
  }

  return iconButton(
    "Edit",
    '<i class="fa-solid fa-pen-to-square"></i>',
    clickEvent
  );
}

function deleteButton(element, projectObj, deleteEvent) {
  function clickEvent(event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    if (deleteEvent) deleteEvent.call(element, projectObj, event);
    element.remove();
  }

  return iconButton("Delete", '<i class="fa-solid fa-xmark"></i>', clickEvent);
}
