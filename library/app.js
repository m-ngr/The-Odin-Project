// ============================== Book =========================================
function Book(title, author, pages, isRead) {
  if (!title || !author || !pages) {
    throw new Error("Invalid Book Info");
  }

  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = Boolean(isRead);
  this.createHTML();
}

Book.prototype.isEqual = function (book) {
  return this.title === book.title;
};

Book.prototype.createHTML = function () {
  const card = document.createElement("article");
  const title = document.createElement("h2");
  const author = document.createElement("p");
  const pages = document.createElement("p");
  const read = document.createElement("button");
  const remove = document.createElement("button");

  this.html = card;
  this.readButton = read;

  card.className = "card";
  title.innerText = this.title;
  author.innerText = this.author;
  pages.innerText = `${this.pages} Pages`;
  this.showState();
  remove.innerText = "Remove";
  remove.className = "btn";

  read.addEventListener("click", toggleRead);
  remove.addEventListener("click", removeBook);

  card.appendChild(title);
  card.appendChild(author);
  card.appendChild(pages);
  card.appendChild(read);
  card.appendChild(remove);
};

Book.prototype.showState = function () {
  if (this.isRead) {
    this.readButton.innerText = "Read";
    this.readButton.className = "btn green-bgc";
  } else {
    this.readButton.innerText = "Not read";
    this.readButton.className = "btn red-bgc";
  }
};
// -------------- book events ---------------
function toggleRead(e) {
  const title = e.target.parentNode.firstChild.innerHTML;
  const book = library.getBookByTitle(title);
  if (book !== null) {
    book.isRead = !book.isRead;
    book.showState();
  }
}

function removeBook(e) {
  const title = e.target.parentNode.firstChild.innerHTML;
  library.removeBook(title);
}
// =============================== Library ====================================
function Library(gridId = "", books = []) {
  this.books = [...books];
  this.grid = null;
  if (gridId !== "") {
    this.grid = document.getElementById(gridId);
  }
}

Library.prototype.addBook = function (newBook) {
  if (this.hasTitle(newBook.title)) return false;
  this.books.push(newBook);
  this.grid.appendChild(newBook.html);
  return true;
};

Library.prototype.removeBook = function (title) {
  let targetBook = this.getBookByTitle(title);
  if (targetBook !== null) {
    this.grid.removeChild(targetBook.html);
  }
  this.books = this.books.filter((book) => book.title !== title);
};

Library.prototype.getBookByTitle = function (title) {
  for (let book of this.books) {
    if (book.title === title) {
      return book;
    }
  }
  return null;
};

Library.prototype.hasTitle = function (title) {
  for (let book of this.books) {
    if (book.title === title) {
      return true;
    }
  }
  return false;
};

Library.prototype.showBooks = function () {
  this.grid.innerText = "";
  this.books.forEach((book) => this.grid.appendChild(book.html));
};

const library = new Library("lib-grid");
//================================== Add Form =====================================
function AddForm() {
  this.showButton.addEventListener("click", () => this.show());
  this.html.addEventListener("click", (e) => this.hide(e.target));
  this.submitButton.addEventListener("click", (e) => this.submit(e));

  this.titleInput.addEventListener("focusout", () => this.validateTitle());
  this.authorInput.addEventListener("focusout", () => this.validateAuthor());

  this.pagesInput.addEventListener("focusout", () => this.validatePages());

  this.titleInput.addEventListener("focusin", () =>
    this.resetElement(this.titleInput, this.titleOutput)
  );
  this.authorInput.addEventListener("focusin", () =>
    this.resetElement(this.authorInput, this.authorOutput)
  );
  this.pagesInput.addEventListener("focusin", () =>
    this.resetElement(this.pagesInput, this.pagesOutput)
  );
}
AddForm.prototype.showButton = document.getElementById("show-add-form");
AddForm.prototype.html = document.getElementById("add-form");
AddForm.prototype.titleInput = AddForm.prototype.html.querySelector("#title");
AddForm.prototype.titleOutput = AddForm.prototype.html.querySelector(
  'output[for="title"]'
);
AddForm.prototype.authorInput = AddForm.prototype.html.querySelector("#author");
AddForm.prototype.authorOutput = AddForm.prototype.html.querySelector(
  'output[for="author"]'
);
AddForm.prototype.pagesInput = AddForm.prototype.html.querySelector("#pages");
AddForm.prototype.pagesOutput = AddForm.prototype.html.querySelector(
  'output[for="pages"]'
);
AddForm.prototype.readInput = AddForm.prototype.html.querySelector("#read");
AddForm.prototype.submitButton =
  AddForm.prototype.html.querySelector('[type="submit"]');

AddForm.prototype.setInvalid = function (inputElement, outputElement, message) {
  outputElement.value = message;
  outputElement.hidden = false;
  inputElement.classList.add("invalid");
};

AddForm.prototype.resetElement = function (inputElement, outputElement) {
  outputElement.value = "";
  outputElement.hidden = true;
  inputElement.classList.remove("invalid");
};

AddForm.prototype.resetOutputs = function () {
  this.resetElement(this.titleInput, this.titleOutput);
  this.resetElement(this.authorInput, this.authorOutput);
  this.resetElement(this.pagesInput, this.pagesOutput);
};

AddForm.prototype.validateTitle = function () {
  this.resetElement(this.titleInput, this.titleOutput);
  if (this.titleInput.value.trim() === "") {
    this.setInvalid(
      this.titleInput,
      this.titleOutput,
      "Please, enter a title for your book"
    );
    return false;
  }
  if (library.hasTitle(this.titleInput.value.trim())) {
    this.setInvalid(
      this.titleInput,
      this.titleOutput,
      "This book already exists in your library"
    );
    return false;
  }
  return true;
};

AddForm.prototype.validateAuthor = function () {
  this.resetElement(this.authorInput, this.authorOutput);
  if (this.authorInput.value.trim() === "") {
    this.setInvalid(
      this.authorInput,
      this.authorOutput,
      "Please, enter the author of your book"
    );
    return false;
  }
  return true;
};

AddForm.prototype.validatePages = function () {
  this.resetElement(this.pagesInput, this.pagesOutput);
  if (this.pagesInput.value.trim() === "") {
    this.setInvalid(
      this.pagesInput,
      this.pagesOutput,
      "Please, enter the number of pages of your book"
    );
    return false;
  }
  const pageNum = Number(this.pagesInput.value);
  if (!Number.isInteger(pageNum) || pageNum < 1) {
    this.setInvalid(
      this.pagesInput,
      this.pagesOutput,
      "Please, enter an integer greater than 0"
    );
    return false;
  }
  this.pagesInput.value = pageNum;
  return true;
};

AddForm.prototype.validate = function () {
  let res = this.validateTitle();
  res = this.validateAuthor() && res;
  res = this.validatePages() && res;
  return res;
};

AddForm.prototype.hide = function (element) {
  element = element ?? this.html;
  if (element === this.html) {
    this.html.classList.remove("show");
  }
};

AddForm.prototype.show = function () {
  this.resetInputs();
  this.resetOutputs();
  this.html.classList.add("show");
};

AddForm.prototype.resetInputs = function () {
  this.titleInput.value = "";
  this.authorInput.value = "";
  this.pagesInput.value = "";
  this.readInput.checked = false;
};

AddForm.prototype.submit = function (e) {
  e.preventDefault();
  if (this.validate()) {
    library.addBook(
      new Book(
        this.titleInput.value,
        this.authorInput.value,
        this.pagesInput.value,
        this.readInput.checked
      )
    );
    this.hide();
  }
};

const addForm = new AddForm();
// =============================== Dummy Button ====================================
document.getElementById("dummy-button").addEventListener("click", addDummyData);
function addDummyData() {
  for (let n = 1; n < 5; ++n) {
    let i = Math.floor(Math.random() * 1000);
    library.addBook(new Book(`Title ${i}`, `Author ${i}`, i * 10, i % 2));
  }
}
