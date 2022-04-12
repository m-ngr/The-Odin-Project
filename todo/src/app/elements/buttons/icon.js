export function iconButton(title = "", faIconHTML = "", clickEvent) {
  const button = document.createElement("button");
  button.innerHTML = faIconHTML || '<i class="fa-solid fa-square"></i>';
  button.className = "common-btn icon-btn";
  button.title = title;

  if (clickEvent) {
    button.addEventListener("click", clickEvent.bind(button));
  }

  return button;
}
