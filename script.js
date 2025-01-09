/* All book objects will be stored in myLibrary, an array */

const myLibrary = [];

/* This is our object constructor, all book objects will have this as its prototype */

function Book(image, title, author, pages, read) {
    this.image = image;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

const innerGame = new Book('./innerGame.jpg', 'The Inner Game of Tennis', 'W. Timothey Gallwey', 192, 'Yes');

addBookToLibrary(innerGame);


let shelfSelection = document.querySelector("#shelf");
const newCard = document.createElement("div");

var myLibraryLength = myLibrary.length;

for (var i = 0; i < myLibraryLength; i++) {
    newCard.innerHTML = "<img src=" + (myLibrary[i].image) + " alt='book cover'>" + "<strong>" + "Name: " + "</strong>" + (myLibrary[i].title) + " by " + (myLibrary[i].author) + "<br />" + "<strong>" + " Pages: " + "</strong>" + (myLibrary[i].pages) + "<br />" + "<strong>" + " Read? " + "</strong>" + (myLibrary[i].read)
    shelfSelection.appendChild(newCard);
};
