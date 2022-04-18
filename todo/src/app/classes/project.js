import { task, save } from "./index";

class Project {
  #tasks = [];

  constructor(title) {
    this.title = title;
  }

  addTask(...tasks) {
    this.#tasks.push(...tasks);
    save();
  }

  removeTask(targetTask) {
    this.#tasks = this.#tasks.filter((task) => task !== targetTask);
    save();
  }

  get tasks() {
    return [...this.#tasks];
  }

  task(index = 0) {
    return this.#tasks[index];
  }

  toJSON() {
    return {
      title: this.title,
      tasks: this.tasks.map((task) => task.toJSON()),
    };
  }

  fromJSON(projectJSON) {
    if (projectJSON) {
      this.title = projectJSON.title;
      this.#tasks = projectJSON.tasks.map((tsk) => task().fromJSON(tsk));
    }
    return this;
  }
}

export function project(title) {
  return new Project(title);
}
