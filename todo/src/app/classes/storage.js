import { projectManager } from "./projectManager";

export function load() {
  projectManager.fromJSON(JSON.parse(localStorage.getItem("projects")));
}

export function save() {
  localStorage.setItem("projects", JSON.stringify(projectManager.toJSON()));
}
