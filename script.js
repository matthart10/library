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

// Function that loops through array, element is the element currently being looped through, run the displayBook function with element as the parameter
function updateShelf() {
    myLibrary.forEach((element) => displayBook(element));
};

// Counter so we have a unique id for every new checkbox that has been created
let i = 0;

// The display book function, takes in an element and then uses it and calls properties of this element such as .image and .author
function displayBook(element) {
    const newCard = document.createElement("div");
    // Adding green background based on read answer
    if (element.read === "Yes") {
        newCard.classList.add("readBackground");
    };
    i = i + 1;
    newCard.innerHTML = "<img src=" + (element.image) + " alt='book cover'><strong>Title: </strong>" + (element.title) + "<br /><strong>Author: </strong>" + (element.author) + "<br /><strong>Pages: </strong>" + (element.pages) + "<br /><strong>Finished reading? </strong><span>" + (element.read);
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("id",`checkbox${i}`);
    newCard.appendChild(checkbox);
    const removeBox = document.createElement("button");
    removeBox.classList.add("deleteButton");
    removeBox.textContent = "Delete";
    newCard.appendChild(removeBox);
    shelfSelection.appendChild(newCard);
    // Remove div card if delete button is clicked
    removeBox.addEventListener('click', function() {
        newCard.remove();
    });
    // On load, checkbox is checked
    if (newCard.classList.contains("readBackground")) {
        checkbox.setAttribute("checked", "true");
    }
    // Change background and HTML to Yes/No depending on if checkbox is checked or not
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            newCard.classList.add("readBackground");
            element.read = "Yes";
            newCard.innerHTML = "<img src=" + (element.image) + " alt='book cover'><strong>Title: </strong>" + (element.title) + "<br /><strong>Author: </strong>" + (element.author) + "<br /><strong>Pages: </strong>" + (element.pages) + "<br /><strong>Finished reading? </strong><span>" + (element.read);
            newCard.appendChild(checkbox);
            newCard.appendChild(removeBox);
        } else {
            newCard.classList.remove("readBackground");
            element.read = "No";
            newCard.innerHTML = "<img src=" + (element.image) + " alt='book cover'><strong>Title: </strong>" + (element.title) + "<br /><strong>Author: </strong>" + (element.author) + "<br /><strong>Pages: </strong>" + (element.pages) + "<br /><strong>Finished reading? </strong><span>" + (element.read);
            newCard.appendChild(checkbox);
            newCard.appendChild(removeBox);
        }
    });
};

// Call the updateShelf() function for books already in the array
updateShelf();

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
    // Grey out button so it is unclickable anymore
    addBookButton.classList.add("normalCursor");
    addBookButton.classList.add("greyBackground");
});

// If close button in the form is clicked, hide the form
const closeButton = document.querySelector(".close");
closeButton.addEventListener("click", () => {
    theForm.style.display="none";
    addBookButton.classList.remove("normalCursor");
    addBookButton.classList.remove("greyBackground");
});

// Selecting the span at the beginning of the shelf div
const firstPlaceholder = document.querySelector(".firstPlaceholder");

// If the add button in the form is clicked is clicked
const addButton = document.querySelector(".add");
addButton.addEventListener("click", (event) => {
    event.preventDefault();
    const form = document.querySelector("#myForm");
    const submitter = document.querySelector("button[value=add");
    var formData = new FormData(form, submitter);
    var title = formData.get('title');
    var author = formData.get('author');
    var pages = formData.get('pages');
    var read = formData.get('read');
    var imageName = formData.get('imageFile');
    var reader  = new FileReader();
    reader.readAsDataURL(imageName);
    // Form validation
    if (title === "") {
        alert("Title is empty, please add the title of your book.");
    } else if (author == "") {
        alert("Author is empty, please add the author of your book.");
    } else if (pages == "") {
        alert("# of pages is empty, please add the number of pages of your book.");
    } else {
        addBookButton.classList.remove("normalCursor");
        addBookButton.classList.remove("greyBackground");
        theForm.style.display="none";
        form.reset();
        // Create new book
        var newBook = new Book(imageName, title, author, pages, read);
        addBookToLibrary(newBook);
        const newCard1 = document.createElement("div");
        // Green background add if checkbox was checked
        if (read) {
            read = "Yes";
            newCard1.classList.add("readBackground");
        } else {
            read = "No";
            };
        // Iteration
        i = i + 1;
        // Load everything in
        reader.onload = function(e)  {
            newCard1.innerHTML = "<img src=" + e.target.result + " alt='book cover'> <strong>Title: </strong>" + title + "<br /><strong>Author: </strong>" + author + "<br /><strong>Pages: </strong>" + pages + "<br /><strong>Finished reading?</strong><span>" + read;
            const checkbox1 = document.createElement("input");
            checkbox1.setAttribute("type", "checkbox");
            checkbox1.setAttribute("id",`checkbox${i}`);
            newCard1.appendChild(checkbox1);
            const removeBox1 = document.createElement("button");
            removeBox1.textContent = "Delete";
            removeBox1.classList.add("deleteButton");
            newCard1.appendChild(removeBox1);
            shelfSelection.insertBefore(newCard1, firstPlaceholder);
            // If delete button is clicked, delete the div
            removeBox1.addEventListener('click', function() {
                newCard1.remove();
            });
            // On load, checkbox is checked
            if (newCard1.classList.contains("readBackground")) {
                checkbox1.setAttribute("checked", "true");
            }
            // Change background and HTML to Yes/No depending on if checkbox is checked or not
            checkbox1.addEventListener('change', function() {
                if (this.checked) {
                    newCard1.classList.add("readBackground");
                    read = "Yes";
                    newCard1.innerHTML = "<img src=" + e.target.result + " alt='book cover'> <strong>Title: </strong>" + title + "<br /><strong>Author: </strong>" + author + "<br /><strong>Pages: </strong>" + pages + "<br /><strong>Finished reading?</strong><span>" + read;
                    newCard1.appendChild(checkbox1);
                    newCard1.appendChild(removeBox1);
                } else {
                    newCard1.classList.remove("readBackground");
                    read = "No";
                    newCard1.innerHTML = "<img src=" + e.target.result + " alt='book cover'> <strong>Title: </strong>" + title + "<br /><strong>Author: </strong>" + author + "<br /><strong>Pages: </strong>" + pages + "<br /><strong>Finished reading?</strong><span>" + read;
                    newCard1.appendChild(checkbox1);
                    newCard1.appendChild(removeBox1);
                };
            });
        };
    };
});