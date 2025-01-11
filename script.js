// All book objects will be stored in myLibrary, an array
const myLibrary = [];

// This is our object constructor, all book objects will have this as its prototype
function Book(image, title, author, pages, read) {
    this.image = image;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// Function that takes in a variable (which is usually a book in the form of an object) and adds it to the array
function addBookToLibrary(book) {
    myLibrary.push(book);
}

// Creating Inner Game of Tennis object with Book object constructor
const innerGame = new Book('./innerGame.jpg', 'The Inner Game of Tennis', 'W. Timothey Gallwey', 192, 'Yes');

// Add Inner Game of Tennis to library by calling this function
addBookToLibrary(innerGame);

// Select the div that contains all the cards
let shelfSelection = document.querySelector("#shelf");

// Get array length
var myLibraryLength = myLibrary.length;

// For loop that loops through array length and creates a div/card for each object
for (var i = 0; i < myLibraryLength; i++) {
    const newCard = document.createElement("div");
    newCard.innerHTML = "<img src=" + (myLibrary[i].image) + " alt='book cover'>" + "<strong>" + "Name: " + "</strong>" + (myLibrary[i].title) + " by " + (myLibrary[i].author) + "<br />" + "<strong>" + " Pages: " + "</strong>" + (myLibrary[i].pages) + "<br />" + "<strong>" + " Read? " + "</strong>" + (myLibrary[i].read)
    shelfSelection.appendChild(newCard);
};

// Add a separate card that is a button so you can click it to add a book
const addBookButton = document.createElement("button");
addBookButton.classList.add("plus");
addBookButton.innerHTML = "+";
shelfSelection.appendChild(addBookButton);
