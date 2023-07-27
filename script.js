let myLibrary = [
    {title: "Gideon the Ninth", author: 'Tamsyn Muir', pages: 325, read: "yes"},
    {title: "Harrow the Ninth", author: 'Tamsyn Muir', pages: 482, read: "yes"},
    {title: "Nona the Ninth", author: 'Tamsyn Muir', pages: 512, read: "yes"},
    {title: "Alecto the Ninth", author: 'Tamsyn Muir', pages: 681, read: "no"},
];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

function addToLibrary() {
    let newBook = new Book(bookForm.title.value, bookForm.author.value, bookForm.pages.value, bookForm.read.value);
    myLibrary.push(newBook);
    addToTable();
};

//display any existing myLibrary entries w/ buttons to change read status or delete rows

const table = document.querySelector('#bookTable');

for (let i = 0; i < myLibrary.length; i++) {
    newRow = table.insertRow();
    newRow.setAttribute('id', [i]);

    let newCell1 = newRow.insertCell();
    let newCell2 = newRow.insertCell();
    let newCell3 = newRow.insertCell();
    let newCell4 = newRow.insertCell();

    let newText1 = document.createTextNode(myLibrary[i].title);
    newCell1.appendChild(newText1);

    let newText2 = document.createTextNode(myLibrary[i].author);
        newCell2.appendChild(newText2);

    let newText3 = document.createTextNode(myLibrary[i].pages);
        newCell3.appendChild(newText3);

        const readButton = document.createElement('button');
        readButton.setAttribute('id','readButton');
        readButton.innerText = myLibrary[i].read;
        readButton.setAttribute('class', readButton.innerText);

        readButton.addEventListener('click', (e) => {
            if (readButton.innerText === "yes") {
                readButton.innerText = "no";
                readButton.setAttribute('class', 'no')
            } else if (readButton.innerText === "no") {
                readButton.innerText = "yes";
                readButton.setAttribute('class', 'yes')
            }
        })
        newCell4.appendChild(readButton);

    let newCell5 = newRow.insertCell();

    const deleteButton = document.createElement('button');
    deleteButton.setAttribute('id','deleteButton');
    deleteButton.innerText = "remove";
    deleteButton.addEventListener('click', (e) => {
        document.getElementById([i]).remove();
        myLibrary.splice(i, 1)
    });
newCell5.appendChild(deleteButton);
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

document.getElementById('newBook').addEventListener('click', (e) => {
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

    let newCell1 = newRow.insertCell();
    let newCell2 = newRow.insertCell();
    let newCell3 = newRow.insertCell();
    let newCell4 = newRow.insertCell();

    let newText1 = document.createTextNode(myLibrary[i].title);
    newCell1.appendChild(newText1);

    let newText2 = document.createTextNode(myLibrary[i].author);
        newCell2.appendChild(newText2);

    let newText3 = document.createTextNode(myLibrary[i].pages);
        newCell3.appendChild(newText3);

    const readButton = document.createElement('button');
    readButton.setAttribute('id','readButton');
    readButton.innerText = myLibrary[i].read;
    readButton.setAttribute('class', readButton.innerText);

    readButton.addEventListener('click', (e) => {
        if (readButton.innerText === "yes") {
            readButton.innerText = "no";
            readButton.setAttribute('class', 'no');
        } else if (readButton.innerText === "no") {
            readButton.innerText = "yes";
            readButton.setAttribute('class', 'yes');
        }
    })
    newCell4.appendChild(readButton);

    let newCell5 = newRow.insertCell();

    const deleteButton = document.createElement('button');
    deleteButton.setAttribute('id','deleteButton');
    deleteButton.innerText = "remove";
    deleteButton.addEventListener('click', (e) => {
        document.getElementById([i]).remove();
        myLibrary.splice(i, 1)
    });
newCell5.appendChild(deleteButton);
};

