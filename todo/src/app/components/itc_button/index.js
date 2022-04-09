export function itcButton(
  title = "",
  faIconHTML = "",
  clickEvent,
  ...controlElements
) {
  const element = document.createElement("button");
  const iconElement = document.createElement("span");
  const titleElement = document.createElement("span");
  const controlsContainer = document.createElement("span");

  iconElement.innerHTML = faIconHTML || '<i class="fa-solid fa-square"></i>';
  titleElement.innerText = title;
  controlsContainer.append(...controlElements);

  element.title = title;

  if (clickEvent) {
    element.addEventListener("click", clickEvent.bind(element));
  }

  element.append(iconElement, titleElement, controlsContainer);
  return element;
}
