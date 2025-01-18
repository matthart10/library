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

// Creating Cant Hurt Me object with Book object constructor
const cantHurtMe = new Book('./cantHurtMe.jpg', "Can't Hurt Me", 'David Goggins', 364, 'Yes');

// Add Inner Game of Tennis to library by calling this function
addBookToLibrary(innerGame);

// Add Cant Hurt Me to library by calling this function
addBookToLibrary(cantHurtMe);

// Select the div that contains all the cards
let shelfSelection = document.querySelector("#shelf");

// Get array length
var myLibraryLength = myLibrary.length;

// For loop that loops through array length and creates a div/card for each object
for (var i = 0; i < myLibraryLength; i++) {
    const newCard = document.createElement("div");
    newCard.innerHTML = "<img src=" + (myLibrary[i].image) + " alt='book cover'>" + "<strong>" + "Title: " + "</strong>" + (myLibrary[i].title) + "<br />" + "<strong>" + "Author:" + '</strong>' + (myLibrary[i].author) + "<br />" + "<strong>" + " Pages: " + "</strong>" + (myLibrary[i].pages) + "<br />" + "<strong>" + " Read? " + "</strong>" + (myLibrary[i].read)
    shelfSelection.appendChild(newCard);
};

// Add a separate card that is a button so you can click it to add a book
const addBookButton = document.createElement("button");
addBookButton.classList.add("plus");
addBookButton.innerHTML = "+";
shelfSelection.appendChild(addBookButton);

// Select form from html
const theForm = document.querySelector(".form");

// If the plus button is clicked, open up the form
addBookButton.addEventListener("click", () => {
    theForm.style.display="block";
    addBookButton.classList.add("normalCursor");
});

// If close button is clicked, hide the form
const closeButton = document.querySelector(".close");
closeButton.addEventListener("click", () => {
    theForm.style.display="none";
    addBookButton.classList.remove("normalCursor");
});

// If the add button is clicked
const addButton = document.querySelector(".add");
addButton.addEventListener("click", (event) => {
    event.preventDefault();
    theForm.style.display="none";
    const form = document.querySelector("#myForm");
    const submitter = document.querySelector("button[value=add");
    const formData = new FormData(form, submitter);
    const title = formData.get('title');
    const author = formData.get('author');
    const pages = formData.get('pages');
    const read = formData.get('read');
    const newBook = new Book('./innerGame.jpg', title, author, pages, read);
    console.log(newBook);
    addBookToLibrary(newBook);
    console.log(myLibrary);
    const newCard1 = document.createElement("div");
    newCard1.innerHTML = "<img src=" + "./innerGame.jpg" + " alt='book cover'>" + "<strong>" + "Title: " + "</strong>" + title + "<br />" + "<strong>" + "Author:" + '</strong>' + author + "<br />" + "<strong>" + " Pages: " + "</strong>" + pages + "<br />" + "<strong>" + " Read? " + "</strong>" + read;
    shelfSelection.appendChild(newCard1);
})


