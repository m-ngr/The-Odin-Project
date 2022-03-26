import "./style.css";

class TabSystem {
  // implemented with class for practice and convenience
  #tabs = [];
  #_selected;

  #tabsElement = document.createElement("main");
  #tabHead = document.createElement("nav");
  #tabList = document.createElement("ul");
  #tabBody = document.createElement("section");

  constructor() {
    this.#tabsElement.className = "tab";
    this.#tabHead.append(this.#tabList);
    this.#tabsElement.append(this.#tabHead, this.#tabBody);
  }

  element() {
    return this.#tabsElement;
  }

  open(tabID = "") {
    if (tabID === "") return;
    this.#tabs.forEach((tab) => {
      if (tab.id.toLowerCase() === tabID.toLowerCase()) {
        this.#switchTabs(tab);
      }
    });
  }

  add(name = "", id = "", body) {
    name = name.trim();
    id = id.trim().toLowerCase();
    if (name === "") throw Error("Tab name can't be empty");
    if (id === "") throw Error("Tab id can't be empty");
    if (this.#hasTab(id)) throw Error("Tab id must be unique");

    const tab = { name, id, body };
    tab.head = this.#renderTabItem(tab);

    if (this.#selectedTab == undefined) {
      this.#selectedTab = tab;
    }

    this.#tabs.push(tab);
  }

  #hasTab(id = "") {
    if (id.includes(" ")) throw Error("Tab id can't have spaces");

    for (const tab of this.#tabs) {
      if (tab.id.toLowerCase() === id.toLowerCase()) {
        return true;
      }
    }
    return false;
  }

  #renderTabItem(tab) {
    const tabItem = document.createElement("li");
    tabItem.innerText = tab.name;
    tabItem.addEventListener("click", this.#switchTabs.bind(this, tab));
    this.#tabList.append(tabItem);
    return tabItem;
  }

  #renderSelectedBody() {
    this.#tabBody.innerText = "";
    this.#tabBody.append(this.#selectedTab.body);
  }

  get #selectedTab() {
    return this.#_selected;
  }

  set #selectedTab(tab) {
    this.#_selected = tab;
    this.#tabs.forEach((t) => t.head.classList.remove("selected"));
    tab.head.classList.add("selected");
    this.#renderSelectedBody();
  }

  #switchTabs(tab) {
    this.#selectedTab = tab;
    window.location.hash = `#${tab.id.toLowerCase()}`;
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  }
}

export function tabs() {
  //function wrapper is used to avoid the `new` keyword
  return new TabSystem();
}
