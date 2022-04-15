import "./index.css";
import { iconTextButton, listElement } from "../../elements";
import { projectItem } from "../project_item";
import { partial } from "../../utils";
import { projectForm } from "../project_form";
import { project as projectObject } from "../../classes";
import { project as projectElement } from "../project";

export function projectList(projectManager, showAreaElement, relatedLists) {
  const element = listElement("Projects", [], { autoSelect: true });

  projectManager.projects.forEach((projectObj) => {
    addProjectItem(element, projectManager, projectObj, showAreaElement);
  });

  const addButton = iconTextButton(
    "Add Task",
    '<i class="fa-solid fa-plus"></i>',
    partial(showAddForm, element, projectManager, showAreaElement)
  );

  element.relatedLists = relatedLists || [];
  element.append(addButton);
  return element;
}

function addProjectItem(element, projectManager, projectObj, showAreaElement) {
  element.addElements(
    projectItem(
      projectObj,
      showEvent.bind(element, showAreaElement),
      partial(deleteEvent, element, projectManager, showAreaElement),
      partial(updateEvent, element, projectObj, showAreaElement)
    )
  );
}

function updateEvent(element, projectObj, showAreaElement) {
  if (element.isSelected(this.parentElement)) {
    showEvent(showAreaElement, projectObj);
  }
}

function deleteEvent(element, projectManager, showAreaElement, projectObj) {
  if (element.isSelected(this.parentElement)) {
    showAreaElement.innerHTML = "";
  }
  projectManager.removeProject(projectObj);

  element.removeElements(this.parentElement);
}

function showAddForm(element, projectManager, showAreaElement) {
  const button = this;

  function addEvent(result) {
    const newProject = projectObject(result.title);
    projectManager.addProject(newProject);
    addProjectItem(element, projectManager, newProject, showAreaElement);
    button.style.display = "";
  }

  function cancelEvent() {
    button.style.display = "";
  }

  const form = projectForm(addEvent, cancelEvent);
  element.insertBefore(form, button);
  button.style.display = "none";
}

function showEvent(showAreaElement, projectObj) {
  this.relatedLists.forEach((list) => list.unselectAll());
  showAreaElement.innerHTML = "";
  showAreaElement.append(projectElement(projectObj, false));
}
