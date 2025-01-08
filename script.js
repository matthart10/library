/* All book objects will be stored in myLibrary, an array */

const myLibrary = [];

/* This is our object constructor, all book objects will have this as its prototype */

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

const innerGame = new Book('The Inner Game of Tennis', 'W. Timothey Gallwey', 192, 'Yes');

addBookToLibrary(innerGame);

console.log(myLibrary[0]);

let tableSelection = document.querySelector("#table");
const newRow = document.createElement("tr");

var myLibraryLength = myLibrary.length;

for (var i = 0; i < myLibraryLength; i++) {
    newRow.innerText = JSON.stringify(myLibrary[i]);
    tableSelection.appendChild(newRow);
};
