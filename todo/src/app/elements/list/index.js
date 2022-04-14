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
    elementClass: "list-element",
    titleTag: "h2",
    titleClass: "list-element-title",
    listTag: "ul",
    listClass: "list-element-list",
    itemTag: "li",
    itemClass: "list-element-item",
    skipItemTag: false,
    autoSelect: false,
    selectedClass: "list-element-selected",
    multiSelect: false,
  }
) {
  const element = document.createElement(options.elementTag || "section");
  element.titleElement = document.createElement(options.titleTag || "h2");
  element.listElement = document.createElement(options.listTag || "ul");

  element.className = options.elementClass || "list-element";
  element.titleElement.className = options.titleClass || "list-element-title";
  element.listElement.className = options.listClass || "list-element-list";

  element.titleElement.innerText = title;
  element.append(element.titleElement, element.listElement);

  if (options.autoSelect) {
    Object.assign(
      element,
      selectable(
        element.listElement,
        options.selectedClass || "list-element-selected"
      )
    );
  }

  Object.assign(
    element,
    controls(element.listElement, {
      itemTag: options.itemTag || "li",
      itemClass: options.itemClass || "list-element-item",
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

function selectable(listElement, selectedClass = "") {
  let _selectedElements = [];

  return {
    selectedElements() {
      return _selectedElements;
    },
    selectElement(itemElement) {
      if ([...listElement.childNodes].includes(itemElement)) {
        itemElement.classList.add(selectedClass);
        _selectedElements.push(itemElement);
      }
    },
    unselectElement(itemElement) {
      if (_selectedElements.includes(itemElement)) {
        itemElement.classList.remove(selectedClass);
        _selectedElements = _selectedElements.filter((e) => e !== itemElement);
      }
    },
    unselectAll() {
      listElement.childNodes.forEach((itemElement) =>
        itemElement.classList.remove(selectedClass)
      );
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
    itemClass: "list-element-item",
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

        itemElement.className = options.itemClass || "list-element-item";
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
    removeAll() {
      listElement.innerHTML = "";
    },
  };
}
