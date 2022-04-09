import "./index.css";

export function itButton(title = "", faIconHTML = "", clickEvent) {
  const element = document.createElement("button");
  const iconElement = document.createElement("span");
  const titleElement = document.createElement("span");

  iconElement.innerHTML = faIconHTML || '<i class="fa-solid fa-square"></i>';
  titleElement.innerText = title;

  element.title = title;
  element.className = "it-button";

  if (clickEvent) {
    element.addEventListener("click", clickEvent.bind(element));
  }

  element.append(iconElement, titleElement);
  return element;
}
