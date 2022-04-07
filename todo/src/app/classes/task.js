class Task {
  #title = "";
  #details = "";
  #date;
  #isCompleted = false;
  #isImportant = false;

  constructor(title, details, date, isImportant) {
    this.title = title;
    this.details = details;
    this.date = date;
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

  get date() {
    return this.#date;
  }
  set date(value) {
    this.#date = value;
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

export function task(title, details, date, isImportant) {
  return new Task(title, details, date, isImportant);
}
