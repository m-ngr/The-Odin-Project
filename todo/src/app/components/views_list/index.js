import "./index.css";
import { iconTextButton, listElement } from "../../elements";
import { project as projectElement } from "../project";

export function viewsList(projectManager, showAreaElement, relatedLists) {
  const element = listElement("Home", [], { autoSelect: true });

  element.addElements(
    allTasksElement(element, projectManager, showAreaElement),
    todayElement(element, projectManager, showAreaElement),
    thisWeekElement(element, projectManager, showAreaElement),
    importantElement(element, projectManager, showAreaElement)
  );

  element.relatedLists = relatedLists || [];

  return element;
}

function displayView(element, views, showAreaElement) {
  element.relatedLists.forEach((list) => list.unselectAll());

  showAreaElement.innerHTML = "";
  views.forEach((view) => {
    showAreaElement.append(
      projectElement({ title: view.project.title, tasks: view.tasks }, true)
    );
  });
}

function allTasksElement(element, projectManager, showAreaElement) {
  function clickEvent() {
    const view = projectManager.filter((tsk) => {
      return tsk.isCompleted === false;
    });
    displayView(element, view, showAreaElement);
  }

  const button = iconTextButton(
    "All Tasks",
    '<i class="fa-solid fa-list-check"></i>',
    clickEvent
  );

  return button;
}

function todayElement(element, projectManager, showAreaElement) {
  function clickEvent() {
    const view = projectManager.filter((tsk) => {
      return (
        tsk.dueDate.toLocaleDateString() === new Date().toLocaleDateString()
      );
    });
    displayView(element, view, showAreaElement);
  }

  const button = iconTextButton(
    "Today",
    '<i class="fa-solid fa-calendar-day"></i>',
    clickEvent
  );

  return button;
}

function thisWeekElement(element, projectManager, showAreaElement) {
  function clickEvent() {
    const view = projectManager.filter((tsk) => {
      const startDate = new Date();
      startDate.setHours(0, 0, 0, 0);
      const endDate = new Date(startDate);
      endDate.setDate(endDate.getDate() + 7);
      return (
        endDate.getTime() > tsk.dueDate.getTime() &&
        tsk.dueDate.getTime() >= startDate.getTime()
      );
    });
    displayView(element, view, showAreaElement);
  }

  const button = iconTextButton(
    "Next 7 Days",
    '<i class="fa-solid fa-calendar-week"></i>',
    clickEvent
  );

  return button;
}

function importantElement(element, projectManager, showAreaElement) {
  function clickEvent() {
    const view = projectManager.filter((tsk) => {
      return tsk.isImportant === true;
    });
    displayView(element, view, showAreaElement);
  }

  const button = iconTextButton(
    "Important",
    '<i class="fa-solid fa-star"></i>',
    clickEvent
  );

  return button;
}
