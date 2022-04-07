let _projects = [];

export const projectManager = {
  get Projects() {
    return [..._projects];
  },

  addProject(project) {
    _projects.push(project);
  },

  removeProject(targetProject) {
    _projects = _projects.filter((project) => project !== targetProject);
  },
};
