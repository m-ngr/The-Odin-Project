class Task {
  #title = "";
  #details = "";
  #dueDate = new Date();
  #isCompleted = false;
  #isImportant = false;

  constructor(title, details, dueDate, isImportant) {
    this.title = title;
    this.details = details;
    this.dueDate = dueDate;
    this.isImportant = isImportant;
  }

  get title() {
    return this.#title;
  }
  set title(value) {
    this.#title = value;
  }

  get details() {
    return this.#details;
  }
  set details(value) {
    this.#details = value;
  }

  get dueDate() {
    return this.#dueDate;
  }
  set dueDate(value) {
    this.#dueDate = new Date(value);
  }

  get isImportant() {
    return this.#isImportant;
  }
  set isImportant(value) {
    this.#isImportant = Boolean(value);
  }

  get isCompleted() {
    return this.#isCompleted;
  }
  set isCompleted(value) {
    this.#isCompleted = Boolean(value);
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
