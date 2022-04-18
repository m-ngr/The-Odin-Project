import { project, save } from "./index";

let _projects = [];

export const projectManager = {
  get projects() {
    return [..._projects];
  },

  project(index = 0) {
    return _projects[index];
  },

  addProject(...projects) {
    _projects.push(...projects);
    save();
  },

  removeProject(targetProject) {
    _projects = _projects.filter((project) => project !== targetProject);
    save();
  },

  filter(pred) {
    let viewItems = [];
    _projects.forEach((proj) => {
      let item = {
        project: proj,
        tasks: proj.tasks.filter(pred),
      };

      if (item.tasks.length !== 0) {
        viewItems.push(item);
      }
    });

    return viewItems;
  },

  toJSON() {
    return this.projects.map((proj) => proj.toJSON());
  },

  fromJSON(json) {
    if (json) {
      _projects = json.map((proj) => project().fromJSON(proj));
    }
    return this;
  },
};
