import { save } from "./index";
class Task {
  #title = "";
  #details = "";
  #dueDate = new Date();
  #isCompleted = false;
  #isImportant = false;

  constructor(title, details, dueDate, isImportant) {
    this.#title = title;
    this.#details = details;
    this.#dueDate = new Date(dueDate);
    this.#isImportant = Boolean(isImportant);
  }

  get title() {
    return this.#title;
  }
  set title(value) {
    this.#title = value;
    save();
  }

  get details() {
    return this.#details;
  }
  set details(value) {
    this.#details = value;
    save();
  }

  get dueDate() {
    return this.#dueDate;
  }
  set dueDate(value) {
    this.#dueDate = new Date(value);
    save();
  }

  get isImportant() {
    return this.#isImportant;
  }
  set isImportant(value) {
    this.#isImportant = Boolean(value);
    save();
  }

  get isCompleted() {
    return this.#isCompleted;
  }
  set isCompleted(value) {
    this.#isCompleted = Boolean(value);
    save();
  }

  toJSON() {
    return {
      title: this.title,
      details: this.details,
      dueDate: this.dueDate.toJSON(),
      isImportant: this.isImportant,
      isCompleted: this.isCompleted,
    };
  }

  fromJSON(taskJSON) {
    if (taskJSON) {
      this.#title = taskJSON.title;
      this.#details = taskJSON.details;
      this.#dueDate = new Date(taskJSON.dueDate);
      this.#isImportant = Boolean(taskJSON.isImportant);
      this.#isCompleted = Boolean(taskJSON.isCompleted);
    }
    return this;
  }
}

export function task(title, details, dueDate, isImportant) {
  return new Task(title, details, dueDate, isImportant);
}

/*
- Load Date from  UTC String
    let date = new Date("2011-04-11T23:01:30.000Z");
- Save Date to UTC String
    date.toJSON();
*/
