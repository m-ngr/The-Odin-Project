let library = new Library("lib-grid");

function Library(gridId = "", books = []) {
  this.books = [...books];
  this.grid = null;
  if (gridId !== "") {
    this.grid = document.getElementById(gridId);
  }
}

Library.prototype.addBook = function (newBook) {
  this.books.forEach((book) => {
    if (book.isEqual(newBook)) {
      return false;
    }
  });
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

//   =====================================================================
function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
  this.html = this.createHTML();
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
  //   =========================================
  card.className = "card";
  title.innerText = this.title;
  author.innerText = this.author;
  pages.innerText = `${this.pages} Pages`;
  if (this.isRead) {
    read.innerText = "Read";
    read.className = "btn green-bgc";
  } else {
    read.innerText = "Not read";
    read.className = "btn red-bgc";
  }
  remove.innerText = "Remove";
  remove.className = "btn";
  //   ===========================================
  read.addEventListener("click", toggleRead);
  remove.addEventListener("click", removeBook);
  //   ===========================================
  card.appendChild(title);
  card.appendChild(author);
  card.appendChild(pages);
  card.appendChild(read);
  card.appendChild(remove);
  return card;
};
// =========================================================================
function toggleRead(e) {
  const title = e.target.parentNode.firstChild.innerHTML;
  const book = library.getBookByTitle(title);
  if (book === null) {
    return;
  }
  if (book.isRead) {
    book.isRead = false;
    e.target.innerText = "Not read";
    e.target.classList.add("red-bgc");
    e.target.classList.remove("green-bgc");
  } else {
    book.isRead = true;
    e.target.innerText = "Read";
    e.target.classList.add("green-bgc");
    e.target.classList.remove("red-bgc");
  }
}

function removeBook(e) {
  const title = e.target.parentNode.firstChild.innerHTML;
  library.removeBook(title);
}
//==============================================================
function AddForm() {
  this.showButton.addEventListener("click", () => this.show());
  this.html.addEventListener("click", (e) => this.hide(e.target));
  this.submitButton.addEventListener("click", (e) => this.submit(e));
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

AddForm.prototype.validateTitle = function () {
  if (this.titleInput.value.trim() === "") {
    this.titleOutput.value = "Please, enter a title for your book";
    this.titleOutput.hidden = false;
    return false;
  }
  if (library.hasTitle(this.titleInput.value.trim())) {
    this.titleOutput.value = "This book already exists in your library";
    this.titleOutput.hidden = false;
    return false;
  }
  return true;
};

AddForm.prototype.validateAuthor = function () {
  if (this.authorInput.value.trim() === "") {
    this.authorOutput.value = "Please, enter the author of your book";
    this.authorOutput.hidden = false;
    return false;
  }
  return true;
};

AddForm.prototype.validatePages = function () {
  if (this.pagesInput.value.trim() === "") {
    this.pagesOutput.value = "Please, enter the number of pages of your book";
    this.pagesOutput.hidden = false;
    return false;
  }
  const pageNum = Number(this.pagesInput.value);
  if (!Number.isInteger(pageNum) || pageNum < 1) {
    this.pagesOutput.value = "Please, enter an integer greater than 0";
    this.pagesOutput.hidden = false;
    return false;
  }
  return true;
};

AddForm.prototype.validate = function () {
  this.resetOutputs();
  return this.validateTitle() && this.validateAuthor() && this.validatePages();
};

AddForm.prototype.hide = function (element) {
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

AddForm.prototype.resetOutputs = function () {
  this.titleOutput.value = "";
  this.titleOutput.hidden = true;
  this.authorOutput.value = "";
  this.authorOutput.hidden = true;
  this.pagesOutput.value = "";
  this.pagesOutput.hidden = true;
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
    this.hide(this.html);
  }
};

const addForm = new AddForm();

// =============================================================
for (let i = 1; i < 10; ++i) {
  library.addBook(new Book(`Title ${i}`, `Author ${i}`, i * 100, i % 2));
}
// ===============================================================
