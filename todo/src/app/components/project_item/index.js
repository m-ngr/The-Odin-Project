import { partial } from "../../utils";
import { itcButton } from "../itc_button";
import { project } from "../project";
import "./index.css";

export function projectItem(project, projectManager) {
  const item = document.createElement("li");
  const button = itcButton(
    project.title,
    "",
    partial(sel, project, projectManager)
  );

  item.append(button);
  return item;
}

function sel(proj, pm) {
  pm.selected = proj;
  document.getElementById("content").innerHTML = "";
  document.getElementById("content").append(project(pm.selected));
}
