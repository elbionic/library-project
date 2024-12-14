const myLibrary =
    [
        {
            title: "Warum juckte mein Auge?",
            author: "Gott und die Welt",
            pages: 1,
            read: "not yet"
        },
        {
            title: "Wie furzt das Nashorn?",
            author: "Trazan",
            pages: 20,
            read: "not yet"
        }
    ];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        const info = this.title + " by " + this.author + ", " + this.pages
            + " pages, " + this.read + "!"
        return info;
    };
}

function addBookToLibrary(title, author, pages, read) {
    let nameBook = new Book(title, author, pages, read);
    myLibrary.push(nameBook);
    return myLibrary
}

addBookToLibrary("Ist da Schnee in meinem Tee?", "Christian Steifen", 123, "reading");
addBookToLibrary("Ist Gott ein Mathematiker?", "Mario Livio", 366, "read");

const tableBody = document.querySelector('.table-body');

function displayBooks() {
    myLibrary.forEach(function (book) {
        const tableRow = document.createElement("tr");
        tableRow.classList.add("tr-parent");
        const tableData0 = document.createElement("td");
        const tableData1 = document.createElement("td");
        const tableData2 = document.createElement("td");
        const tableData3 = document.createElement("td");
        const tableData4 = document.createElement("td");
        const tableData5 = document.createElement("td");
        const removeBtn = document.createElement("button");
        tableData0.textContent = `${book.number}`;
        tableData1.textContent = `${book.title}`;
        tableData2.textContent = `${book.author}`;
        tableData3.textContent = `${book.pages}`;
        tableData4.textContent = `${book.read}`;
        removeBtn.textContent = 'remove'
        tableBody.appendChild(tableRow);
        tableRow.appendChild(tableData0);
        tableRow.appendChild(tableData1);
        tableRow.appendChild(tableData2);
        tableRow.appendChild(tableData3);
        tableRow.appendChild(tableData4);
        tableRow.appendChild(tableData5);
        tableData5.appendChild(removeBtn);
        removeBtn.classList.add("removeBtn");
    });
};

const htmlBody = document.getElementById("htmlBody");
const showButton = document.getElementById("showDialog");
const favDialog = document.getElementById("favDialog");
const outputBox = document.querySelector("output");
const titleInp = favDialog.querySelector("#title");
const authorInp = favDialog.querySelector("#author");
const pagesInp = favDialog.querySelector("#pages");
const readInp = favDialog.querySelector("#read");
const notReadInp = favDialog.querySelector("#notRead");
const confirmBtn = favDialog.querySelector("#confirmBtn");

// "Show the dialog" button opens the <dialog> modally
showButton.addEventListener("click", () => {
    favDialog.showModal();
});


let counter = 6;

// Prevent the "confirm" button from the default behavior of submitting the form, and close the dialog with the `close()` method, which triggers the "close" event.
confirmBtn.addEventListener("click", (event) => {
    event.preventDefault(); // We don't want to submit this fake form
    const tableRow = document.createElement("tr");
    tableRow.classList.add("tr-parent");
    const tableData0 = document.createElement("td");
    const tableData1 = document.createElement("td");
    const tableData2 = document.createElement("td");
    const tableData3 = document.createElement("td");
    const tableData4 = document.createElement("td");
    const tableData5 = document.createElement("td");
    const removeBtn = document.createElement("button");
    const radioButtons = document.querySelectorAll('input[name="readStatus"]');
    const titleValue = titleInp.value;
    const authorValue = authorInp.value;
    const pagesValue = pagesInp.value;
    let selectedRadioBtn;
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            selectedRadioBtn = radioButton.value;
            break;
        }
    }
    const readStatusValue = selectedRadioBtn;
    tableData0.textContent = `${counter}`;
    tableData1.textContent = `${titleInp.value}`;
    tableData2.textContent = `${authorInp.value}`;
    tableData3.textContent = `${pagesInp.value}`;
    tableData4.textContent = `${selectedRadioBtn}`;
    tableData5.textContent = ``;
    removeBtn.textContent = 'remove'
    tableBody.appendChild(tableRow);
    tableRow.appendChild(tableData0);
    tableRow.appendChild(tableData1);
    tableRow.appendChild(tableData2);
    tableRow.appendChild(tableData3);
    tableRow.appendChild(tableData4);
    tableRow.appendChild(tableData5);
    tableData5.appendChild(removeBtn);
    newBook = new Book(titleValue, authorValue, pagesValue, readStatusValue);
    newBook.dataset.number = myLibrary.length;
    myLibrary.push(newBook);
    counter++;
    removeBtn.classList.add("removeBtn");
    console.log(myLibrary);
    favDialog.close();
});

for (var i = 0; i < myLibrary.length; i++) {
    const prop1 = "number";
    myLibrary[i][prop1] = i + 2;
}

displayBooks();

const removeBtn = document.querySelectorAll(".removeBtn");
console.log(removeBtn);


removeBtn.forEach(elm => {
    elm.addEventListener("click", (e) => {
        const element = e.target.parentElement.parentElement;
        console.log(element);
        element.remove();
    });
});