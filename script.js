let myLibrary = [
    {title: "Gideon the Ninth", author: 'Tamsyn Muir', pages: 325, status: "yes"},
    {title: "Harrow the Ninth", author: 'Tamsyn Muir', pages: 482, status: "yes"},
    {title: "Nona the Ninth", author: 'Tamsyn Muir', pages: 512, status: "yes"},
    {title: "Alecto the Ninth", author: 'Tamsyn Muir', pages: "", status: "no"},
];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addToLibrary() {
    let newBook = new Book(bookForm.title.value, bookForm.author.value, bookForm.pages.value, bookForm.read.value);
    myLibrary.push(newBook);
}

// for (let i = 0; i < myLibrary.length; i++) {
//     console.log(myLibrary[i]);
// }

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
document.getElementById("myForm").style.display = "none";
}

function clearForm() {
    document.getElementById("form-container").reset();
}

document.getElementById('new-book').addEventListener('click', (e) => {
    openForm();
});

document.getElementById('submit-btn').addEventListener('click', (e) => {
    e.preventDefault();
    addToLibrary();
    clearForm();
    closeForm();
});