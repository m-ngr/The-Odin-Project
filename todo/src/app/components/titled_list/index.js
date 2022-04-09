import "./index.css";

export function titledList(title = "", titleLevel = 2, ...listItems) {
  const listWrapper = document.createElement("section");
  const titleElement = document.createElement(`h${titleLevel}`);
  const listElement = document.createElement("ul");

  listWrapper.className = "titled-list";
  titleElement.innerText = title;

  listElement.append(...listItems);

  listWrapper.append(titleElement, listElement);

  return listWrapper;
}
