import { iconButton } from "./icon";

export function iconTextButton(title = "", faIconHTML = "", clickEvent) {
  const button = iconButton(title, faIconHTML, clickEvent);
  button.titleElement = document.createElement("span");
  button.titleElement.innerText = title;
  button.className = "common-btn icon-text-btn";
  button.append(button.titleElement);
  return button;
}
