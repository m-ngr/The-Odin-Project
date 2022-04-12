import { iconButton } from "./icon";

export function iconTextButton(title = "", faIconHTML = "", clickEvent) {
  const button = iconButton(title, faIconHTML, clickEvent);
  const titleElement = document.createElement("span");
  titleElement.innerText = title;
  button.className = "common-btn icon-text-btn";
  button.append(titleElement);
  return button;
}
