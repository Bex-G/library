let myLibrary = [
    {title: "Gideon the Ninth", author: 'Tamsyn Muir', readStatus: "read"},
    {title: "Harrow the Ninth", author: 'Tamsyn Muir', readStatus: "read"},
    {title: "Nona the Ninth", author: 'Tamsyn Muir', readStatus: "read"},
    {title: "Alecto the Ninth", author: 'Tamsyn Muir', readStatus: "not read"},
];

function Book(title, author, readStatus) {
    this.title = title;
    this.author = author;
    this.readStatus = readStatus;
};

function addToLibrary() {
    let newBook = new Book(bookForm.title.value, bookForm.author.value, bookForm.readStatus.value);
    myLibrary.push(newBook);
    addToTable();
};

//display any existing myLibrary entries w/ buttons to change read status or delete rows

const table = document.querySelector('#bookTable');

for (let i = 0; i < myLibrary.length; i++) {
    newRow = table.insertRow();
    newRow.setAttribute('id', [i]);
    newRow.setAttribute('class', 'row');

    let newCell1 = newRow.insertCell();
    newCell1.setAttribute('class', 'book-title');
    let newText1 = document.createTextNode(myLibrary[i].title);
    newCell1.appendChild(newText1);
    
    let newCell2 = newRow.insertCell();
    newCell2.setAttribute('class', 'book-author');
    let newText2 = document.createTextNode(myLibrary[i].author);
    newCell2.appendChild(newText2);
    
    let newCell3 = newRow.insertCell();
    newCell3.setAttribute('class', 'book-status');

    const readButton = document.createElement('button');
    readButton.setAttribute('id','statusButton');
    readButton.innerText = myLibrary[i].readStatus;

    readButton.addEventListener('click', () => {
        if (readButton.innerText === "read") {
            readButton.innerText = "not read";
        } else if (readButton.innerText === "not read") {
            readButton.innerText = "read";
        }
    })
    newCell3.appendChild(readButton);

    let newCell4 = newRow.insertCell();
    newCell4.setAttribute('class', 'book-delete');

    const deleteButton = document.createElement('button');
    deleteButton.setAttribute('id','deleteButton');
    deleteButton.innerText = "delete";
    deleteButton.addEventListener('click', () => {
        document.getElementById([i]).remove();
        myLibrary.splice(i, 1)
        });
    newCell4.appendChild(deleteButton);
};

// manage form visibility and actions

function openForm() {
    document.getElementById('formContainer').style.display = "flex";
    document.getElementById('newButton').style.display = "none";
};

function closeForm() {
    document.getElementById("formContainer").style.display = "none";
    document.getElementById('newButton').style.display = "block";
};

function clearForm() {
    document.getElementById("myForm").reset();
};

document.getElementById('newButton').addEventListener('click', () => {
    openForm();
});

document.getElementById('submitButton').addEventListener('click', (e) => {
    e.preventDefault();
    addToLibrary();
    clearForm();
    closeForm();
});

document.getElementById('cancelButton').addEventListener('click', (e) => {
    e.preventDefault();
    clearForm();
    closeForm();
});

//add newBook values to table display

function addToTable() {

    let i = myLibrary.length - 1;

    const table = document.querySelector('#bookTable');

    newRow = table.insertRow();
    newRow.setAttribute('id', [i]);
    newRow.setAttribute('class', 'row');

    let newCell1 = newRow.insertCell();
    newCell1.setAttribute('class', 'book-title');
    let newText1 = document.createTextNode(myLibrary[i].title);
    newCell1.appendChild(newText1);
    
    let newCell2 = newRow.insertCell();
    newCell2.setAttribute('class', 'book-author');
    let newText2 = document.createTextNode(myLibrary[i].author);
    newCell2.appendChild(newText2);
    
    let newCell3 = newRow.insertCell();
    newCell3.setAttribute('class', 'book-status');

    const readButton = document.createElement('button');
    readButton.setAttribute('id','statusButton');
    readButton.innerText = myLibrary[i].readStatus;

    readButton.addEventListener('click', () => {
        if (readButton.innerText === "read") {
            readButton.innerText = "not read";
        } else if (readButton.innerText === "not read") {
            readButton.innerText = "read";
        }
    })
    newCell3.appendChild(readButton);

    let newCell4 = newRow.insertCell();
    newCell4.setAttribute('class', 'book-delete');

    const deleteButton = document.createElement('button');
    deleteButton.setAttribute('id','deleteButton');
    deleteButton.innerText = "delete";
    deleteButton.addEventListener('click', () => {
        document.getElementById([i]).remove();
        myLibrary.splice(i, 1)
        });
    newCell4.appendChild(deleteButton);
};
