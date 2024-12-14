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