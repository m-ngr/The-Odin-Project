import { titledList, itButton } from "../index";
import { itcButton } from "../itc_button";
import { projectItem } from "../project_item";
import "./index.css";

export function projectList(projectManager) {
  const projectItems = projectManager.projects.map((proj) => {
    return projectItem(proj, projectManager);
  });

  const projectList = titledList("Projects", 2, ...projectItems);
  projectList.classList.add("project-list");
  const addButton = itButton("Add Project", '<i class="fa-solid fa-plus"></i>');

  projectList.append(addButton);
  return projectList;
}
