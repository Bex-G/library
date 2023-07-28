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
    readButton.setAttribute('id','readButton');
    readButton.innerText = myLibrary[i].readStatus;
    readButton.setAttribute('class', readButton.innerText);

    readButton.addEventListener('click', () => {
        if (readButton.innerText === "read") {
            readButton.innerText = "not read";
            readButton.setAttribute('class', 'not-read')
        } else if (readButton.innerText === "not read") {
            readButton.innerText = "read";
            readButton.setAttribute('class', 'read')
        }
    })
    newCell3.appendChild(readButton);

    let newCell4 = newRow.insertCell();
    newCell4.setAttribute('class', 'book-remove');

    const deleteButton = document.createElement('button');
    deleteButton.setAttribute('id','deleteButton');
    deleteButton.innerText = "remove";
    deleteButton.addEventListener('click', () => {
        document.getElementById([i]).remove();
        myLibrary.splice(i, 1)
        });
    newCell4.appendChild(deleteButton);
};

// manage form visibility and actions

function openForm() {
    document.getElementById("myForm").style.display = "block";
};

function closeForm() {
    document.getElementById("myForm").style.display = "none";
};

function clearForm() {
    document.getElementById("formContainer").reset();
};

document.getElementById('newBook').addEventListener('click', () => {
    openForm();
});

document.getElementById('submitButton').addEventListener('click', (e) => {
    e.preventDefault();
    addToLibrary();
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
    readButton.setAttribute('id','readButton');
    readButton.innerText = myLibrary[i].readStatus;
    readButton.setAttribute('class', readButton.innerText);

    readButton.addEventListener('click', () => {
        if (readButton.innerText === "read") {
            readButton.innerText = "not read";
            readButton.setAttribute('class', 'not-read')
        } else if (readButton.innerText === "not read") {
            readButton.innerText = "read";
            readButton.setAttribute('class', 'read')
        }
    })
    newCell3.appendChild(readButton);

    let newCell4 = newRow.insertCell();
    newCell4.setAttribute('class', 'book-remove');

    const deleteButton = document.createElement('button');
    deleteButton.setAttribute('id','deleteButton');
    deleteButton.innerText = "remove";
    deleteButton.addEventListener('click', () => {
        document.getElementById([i]).remove();
        myLibrary.splice(i, 1)
        });
    newCell4.appendChild(deleteButton);
};
