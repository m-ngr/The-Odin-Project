export function iButton(title = "", faIconHTML = "", clickEvent) {
  const element = document.createElement("button");
  element.innerHTML = faIconHTML || '<i class="fa-solid fa-square"></i>';
  element.title = title;

  if (clickEvent) {
    element.addEventListener("click", clickEvent.bind(element));
  }

  return element;
}
