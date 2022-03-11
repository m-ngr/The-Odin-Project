// ============================== Book =========================================
class Book {
  #title;
  #author;
  #pages;
  #isRead;
  #html;
  #readButton;

  constructor(title, author, pages, isRead = false) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;

    this.#createHTML();
  }

  get title() {
    return this.#title;
  }

  set title(value) {
    if (!value) {
      throw new Error("Invalid Book Title");
    }
    this.#title = value;
  }

  get author() {
    return this.#author;
  }

  set author(value) {
    if (!value) {
      throw new Error("Invalid Book Author");
    }
    this.#author = value;
  }

  get pages() {
    return this.#pages;
  }

  set pages(value) {
    if (!value || !Number.isInteger(+value) || +value < 1) {
      throw new Error("Invalid Book Pages");
    }
    this.#pages = value;
  }

  get isRead() {
    return this.#isRead;
  }

  set isRead(value) {
    this.#isRead = Boolean(value);
  }

  get html() {
    return this.#html;
  }

  isEqual(book) {
    return this.title === book.title;
  }

  #createHTML() {
    const card = document.createElement("article");
    const title = document.createElement("h2");
    const author = document.createElement("p");
    const pages = document.createElement("p");
    const read = document.createElement("button");
    const remove = document.createElement("button");

    this.#html = card;
    this.#readButton = read;

    card.className = "card";
    title.innerText = this.title;
    author.innerText = this.author;
    pages.innerText = `${this.pages} Pages`;
    this.#showState();
    remove.innerText = "Remove";
    remove.className = "btn";

    read.addEventListener("click", this.toggleRead.bind(this));
    remove.addEventListener("click", this.remove.bind(this));

    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(read);
    card.appendChild(remove);
  }

  #showState() {
    if (this.isRead) {
      this.#readButton.innerText = "Read";
      this.#readButton.className = "btn green-bgc";
    } else {
      this.#readButton.innerText = "Not read";
      this.#readButton.className = "btn red-bgc";
    }
  }

  toggleRead() {
    this.isRead = !this.isRead;
    this.#showState();
  }

  remove() {
    library.removeBook(this);
  }
}
// =============================== Library ====================================
const library = (() => {
  const public = {};

  let books = [];
  const grid = document.getElementById("lib-grid");

  public.addBook = function (newBook) {
    if (public.hasTitle(newBook.title)) return false;
    books.push(newBook);
    grid.appendChild(newBook.html);
    return true;
  };

  public.removeBook = function (targetBook) {
    grid.removeChild(targetBook.html);
    books = books.filter((book) => book.title !== targetBook.title);
  };

  public.getBookByTitle = function (title) {
    for (let book of books) {
      if (book.title === title) {
        return book;
      }
    }
    return null;
  };

  public.hasTitle = function (title) {
    for (let book of books) {
      if (book.title === title) {
        return true;
      }
    }
    return false;
  };

  public.render = function () {
    grid.innerText = "";
    books.forEach((book) => grid.appendChild(book.html));
  };

  return public;
})();
//================================== Add Form =====================================
(() => {
  const showButton = document.getElementById("show-add-form");
  const addForm = document.getElementById("add-form");
  const titleInput = addForm.querySelector("#title");
  const titleOutput = addForm.querySelector('output[for="title"]');
  const authorInput = addForm.querySelector("#author");
  const authorOutput = addForm.querySelector('output[for="author"]');
  const pagesInput = addForm.querySelector("#pages");
  const pagesOutput = addForm.querySelector('output[for="pages"]');
  const readInput = addForm.querySelector("#read");
  const submitButton = addForm.querySelector('[type="submit"]');

  showButton.addEventListener("click", showForm);
  addForm.addEventListener("click", (e) => hideForm(e.target));
  submitButton.addEventListener("click", submit);

  titleInput.addEventListener("focusout", validateTitle);
  authorInput.addEventListener("focusout", validateAuthor);
  pagesInput.addEventListener("focusout", validatePages);

  titleInput.addEventListener(
    "focusin",
    resetElement.bind(null, titleInput, titleOutput)
  );
  authorInput.addEventListener(
    "focusin",
    resetElement.bind(null, authorInput, authorOutput)
  );
  pagesInput.addEventListener(
    "focusin",
    resetElement.bind(null, pagesInput, pagesOutput)
  );

  function setInvalid(inputElement, outputElement, message) {
    outputElement.value = message;
    outputElement.hidden = false;
    inputElement.classList.add("invalid");
  }

  function resetElement(inputElement, outputElement) {
    outputElement.value = "";
    outputElement.hidden = true;
    inputElement.classList.remove("invalid");
  }

  function resetOutputs() {
    resetElement(titleInput, titleOutput);
    resetElement(authorInput, authorOutput);
    resetElement(pagesInput, pagesOutput);
  }

  function validateTitle() {
    resetElement(titleInput, titleOutput);

    if (titleInput.value.trim() === "") {
      setInvalid(
        titleInput,
        titleOutput,
        "Please, enter a title for your book"
      );
      return false;
    }

    if (library.hasTitle(titleInput.value.trim())) {
      setInvalid(
        titleInput,
        titleOutput,
        "This book already exists in your library"
      );
      return false;
    }

    return true;
  }

  function validateAuthor() {
    resetElement(authorInput, authorOutput);

    if (authorInput.value.trim() === "") {
      setInvalid(
        authorInput,
        authorOutput,
        "Please, enter the author of your book"
      );
      return false;
    }

    return true;
  }

  function validatePages() {
    resetElement(pagesInput, pagesOutput);

    if (pagesInput.value.trim() === "") {
      setInvalid(
        pagesInput,
        pagesOutput,
        "Please, enter the number of pages of your book"
      );
      return false;
    }

    const pageNum = Number(pagesInput.value);

    if (!Number.isInteger(pageNum) || pageNum < 1) {
      setInvalid(
        pagesInput,
        pagesOutput,
        "Please, enter an integer greater than 0"
      );
      return false;
    }

    pagesInput.value = pageNum;
    return true;
  }

  function validate() {
    let res = validateTitle();
    res = validateAuthor() && res;
    res = validatePages() && res;
    return res;
  }

  function hideForm(element) {
    element = element ?? addForm;
    if (element === addForm) {
      addForm.classList.remove("show");
    }
  }

  function showForm() {
    resetInputs();
    resetOutputs();
    addForm.classList.add("show");
  }

  function resetInputs() {
    titleInput.value = "";
    authorInput.value = "";
    pagesInput.value = "";
    readInput.checked = false;
  }

  function submit(e) {
    e.preventDefault();
    if (validate()) {
      library.addBook(
        new Book(
          titleInput.value,
          authorInput.value,
          pagesInput.value,
          readInput.checked
        )
      );
      hideForm();
    }
  }
})();
// =============================== Dummy Button ====================================
document.getElementById("dummy-button").addEventListener("click", addDummyData);
function addDummyData() {
  for (let n = 1; n < 5; ++n) {
    let i = Math.floor(Math.random() * 1000);
    library.addBook(new Book(`Title ${i}`, `Author ${i}`, i * 10, i % 2));
  }
}
