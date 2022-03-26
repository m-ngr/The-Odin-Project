import "./style.css";

export function infoItem(iconHTML, infoHTML) {
  const infoElement = document.createElement("article");
  const icon = document.createElement("span");
  const description = document.createElement("p");

  infoElement.className = "info-item";

  icon.innerHTML = iconHTML || `<i class="fa-solid fa-circle-info"></i>`;

  description.innerHTML = infoHTML;

  infoElement.append(icon, description);

  return infoElement;
}
