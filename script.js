myLibrary = [
  {
    title: "Gideon the Ninth",
    author: "Tamsyn Muir",
    status: "read",
    id: crypto.randomUUID(),
  },
  {
    title: "The Divine Comedy",
    author: "Dante Alighieri",
    status: "tbr",
    id: crypto.randomUUID(),
  },
  {
    title: "Good Omens",
    author: "Neil Gaiman, Terry Pratchett",
    status: "read",
    id: crypto.randomUUID(),
  },
  {
    title: "The Song of Achilles",
    author: "Madeline Miller",
    status: "read",
    id: crypto.randomUUID(),
  },
];

class Book {
  constructor(title, author, status, id) {
    if (!new.target) {
      throw Error("You must include the 'new' keyword.");
    } else {
      this.title = title;
      this.author = author;
      this.status = status;
      this.id = id;
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  myLibrary.forEach((book) => {
    addBookToDisplay(book);
  });
});

function addBookToDisplay(book) {
  let tr = document.createElement("tr");

  let tdTitle = document.createElement("td");
  tdTitle.textContent = book.title;

  let tdAuthor = document.createElement("td");
  tdAuthor.textContent = book.author;

  let tdStatus = document.createElement("td");
  let statusBtn = document.createElement("button");
  statusBtn.textContent = book.status;
  statusBtn.classList.add(book.status);
  statusBtn.addEventListener("click", (event) => {
    handleStatus(event, statusBtn, book);
  });
  tdStatus.appendChild(statusBtn);

  let tdDelete = document.createElement("td");
  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.classList.add("deleteBtn");
  deleteBtn.addEventListener("click", (event) => {
    handleDelete(event, book, tr);
  });
  tdDelete.appendChild(deleteBtn);

  tr.appendChild(tdTitle);
  tr.appendChild(tdAuthor);
  tr.appendChild(tdStatus);
  tr.appendChild(tdDelete);
  document.getElementById("display").appendChild(tr);
  document.getElementById("displayContainter");
  tr.scrollIntoView();
}

function handleStatus(event, statusBtn, book) {
  if (
    event.type === "click" ||
    (event.type === "keyup" && event.key === "Enter")
  ) {
    if (book.status === "tbr") {
      book.status = "read";
    } else {
      book.status = "tbr";
    }
    statusBtn.textContent = book.status;
    statusBtn.classList.toggle("tbr");
    statusBtn.classList.toggle("read");
  }
}

function handleDelete(event, book, tr) {
  if (
    event.type === "click" ||
    (event.type === "keyup" && event.key === "Enter")
  ) {
    const indexToRemove = myLibrary.findIndex((book) => this.id === book.id);
    myLibrary.splice(indexToRemove, 1);
    document.getElementById("display").removeChild(tr);
  }
}

// form event and visibility handling

document.getElementById("drawerBtn").addEventListener("click", () => {
  document.getElementById("formContainer").classList.toggle("on-screen");
  document.getElementById("drawerBtn").classList.toggle("active");
});

document.getElementById("cancelBtn").addEventListener("click", (e) => {
  e.preventDefault();
  resetForm();
  document.getElementById("formContainer").classList.toggle("on-screen");
  document.getElementById("drawerBtn").classList.toggle("active");
});

function resetForm() {
  document.getElementById("titleInput").value = "";
  document.getElementById("authorInput").value = "";
  document.getElementById("tbr").checked = true;
  document.getElementById("titleInput").focus();
}

document.getElementById("myForm").addEventListener("submit", (event) => {
  event.preventDefault();
  addBookToLibrary();
  resetForm();
});

function addBookToLibrary() {
  let book = new Book(
    bookForm.titleInput.value,
    bookForm.authorInput.value,
    bookForm.statusInput.value,
    crypto.randomUUID(),
  );
  myLibrary.push(book);
  addBookToDisplay(book);
}
