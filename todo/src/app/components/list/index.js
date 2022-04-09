import "./index.css";

export function listElement(title = "", titleLevel = 2, ...listItems) {
  const listWrapper = document.createElement("section");
  const titleElement = document.createElement(`h${titleLevel}`);
  const ulElement = document.createElement("ul");

  listWrapper.className = "list-element";
  titleElement.innerText = title;

  listItems.forEach((item) => {
    const liElement = document.createElement("li");
    liElement.append(item);
    ulElement.append(liElement);
  });

  console.log();

  listWrapper.append(titleElement, ulElement);

  listWrapper.unselectAll = unselect.bind(listWrapper, ulElement);
  listWrapper.selectElement = select.bind(listWrapper);
  listWrapper.selectedElement = null;

  return listWrapper;
}

function unselect(ulElement) {
  ulElement.childNodes.forEach((li) => li.classList.remove("selected"));
  this.selectedElement = null;
}

function select(liElement) {
  liElement.classList.add("selected");
  this.selectedElement = liElement;
}
