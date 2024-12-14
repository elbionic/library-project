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
