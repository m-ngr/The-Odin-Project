const ddls = document.querySelectorAll(".ddl");

ddls.forEach((ddl) => makeDDL(ddl));

function makeDDL(ddl) {
  const button = ddl.querySelector("button");

  ddl.hideList = () => {
    ddl.classList.add("hide");
  };

  ddl.showList = () => {
    ddl.classList.remove("hide");
  };

  ddl.toggleList = () => {
    ddl.classList.toggle("hide");
  };

  document.addEventListener(`click`, globalHideList.bind(ddl));
  button.addEventListener("click", ddl.toggleList);
}

function globalHideList(event) {
  const element = event.target.closest(`.ddl`);
  if (element !== this) {
    this.hideList();
  }
}
