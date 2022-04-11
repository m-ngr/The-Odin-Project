import "./index.css";
/**
 * just trying JSDocs...
 * @param {HTMLElement[]} contentElements
 */
export function listElement(
  title = "",
  contentElements = [],
  options = {
    elementTag: "section",
    titleTag: "h2",
    listTag: "ul",
    itemTag: "li",
    skipItemTag: false,
    autoSelect: false,
    multiSelect: false,
  }
) {
  const element = document.createElement(options.elementTag || "section");
  element.titleElement = document.createElement(options.titleTag || "h2");
  element.listElement = document.createElement(options.listTag || "ul");

  element.className = "list-element";
  element.titleElement.className = "list-element-title";
  element.listElement.className = "list-element-list";
  element.titleElement.innerText = title;
  element.append(element.titleElement, element.listElement);

  Object.assign(element, selectable(element.listElement));
  Object.assign(
    element,
    controls(element.listElement, {
      itemTag: options.itemTag || "li",
      skipItemTag: options.skipItemTag || false,
      autoSelect: options.autoSelect || false,
      multiSelect: options.multiSelect || false,
      unselectAll: element.unselectAll,
      select: element.selectElement,
      unselect: element.unselectElement,
      isSelected: element.isSelected,
    })
  );

  element.addElements(...contentElements);
  return element;
}

function selectable(listElement) {
  let _selectedElements = [];

  return {
    selectedElements() {
      return _selectedElements;
    },
    selectElement(itemElement) {
      if ([...listElement.childNodes].includes(itemElement)) {
        itemElement.classList.add("selected");
        _selectedElements.push(itemElement);
      }
    },
    unselectElement(itemElement) {
      if (_selectedElements.includes(itemElement)) {
        itemElement.classList.remove("selected");
        _selectedElements = _selectedElements.filter((e) => e !== itemElement);
      }
    },
    unselectAll() {
      listElement.childNodes.forEach((li) => li.classList.remove("selected"));
      _selectedElements = [];
    },
    isSelected(itemElement) {
      return _selectedElements.includes(itemElement);
    },
  };
}
/**
 * @param {HTMLElement} listElement
 */
function controls(
  listElement,
  options = {
    itemTag: "li",
    skipItemTag: false,
    autoSelect: false,
    multiSelect: false,
    unselectAll: () => {},
    /**
     * @param {HTMLElement} element
     */
    select: (element) => {},
    /**
     * @param {HTMLElement} element
     */
    unselect: (element) => {},
    /**
     * @param {HTMLElement} element
     * @returns {Boolean} boolean
     */
    isSelected: (element) => {},
  }
) {
  function singleSelect() {
    options.unselectAll();
    options.select(this);
  }

  function multiSelect() {
    if (options.isSelected(this)) {
      options.unselect(this);
    } else {
      options.select(this);
    }
  }

  function autoSelect(itemElement) {
    if (options.multiSelect) {
      itemElement.addEventListener("click", multiSelect.bind(itemElement));
    } else {
      itemElement.addEventListener("click", singleSelect.bind(itemElement));
    }
  }

  return {
    itemElements() {
      return [...listElement.childNodes];
    },
    itemElement(index = 0) {
      return listElement.childNodes[index];
    },
    addElements(...contentElements) {
      contentElements.forEach((contentElement) => {
        let itemElement = contentElement;

        if (!options.skipItemTag) {
          itemElement = document.createElement(options.itemTag || "li");
          itemElement.append(contentElement);
        }

        itemElement.className = "list-element-item";
        listElement.append(itemElement);

        if (options.autoSelect) autoSelect(itemElement);
      });
    },
    removeElements(...itemElements) {
      itemElements.forEach((contentElement) => {
        try {
          listElement.removeChild(contentElement);
        } catch (error) {
          console.error(error);
        }
      });
    },
  };
}
