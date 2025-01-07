/* All book objects will be stored in myLibrary, an array */

const myLibrary = [];

/* This is our object constructor, all book objects will have this as its prototype */

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {

}

const innerGame = new Book('The Inner Game of Tennis', 'W. Timothey Gallwey', 192, 'Yes');

let container = document.querySelector("#container");
const dummy = document.createElement("div");
dummy.textContent = "Hi";
container.appendChild(dummy);

