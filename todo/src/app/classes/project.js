class Project {
  #tasks = [];

  constructor(title) {
    this.title = title;
  }

  addTask(...tasks) {
    this.#tasks.push(...tasks);
  }

  removeTask(targetTask) {
    this.#tasks = this.#tasks.filter((task) => task !== targetTask);
  }

  get tasks() {
    return [...this.#tasks];
  }
}

export function project(title) {
  return new Project(title);
}
