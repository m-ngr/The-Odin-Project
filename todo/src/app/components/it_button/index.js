export function itButton(title = "", faIconHTML = "", clickEvent) {
  const element = document.createElement("button");
  //element.className = "it-button";
  element.innerHTML = `${
    faIconHTML || '<i class="fa-solid fa-square"></i>'
  } <span>${title}</span>`;

  element.title = title;

  if (clickEvent) {
    element.addEventListener("click", clickEvent.bind(element));
  }

  return element;
}
