const display = document.getElementById("library-container");//library books stored here
const form = document.getElementById("form");
const openModalButton = document.getElementById("openModal");
const closeModalButton = document.getElementById("closeModal");
const modal = document.getElementById("modal");
const exitButton = document.getElementById("exitModalButton");

// exits modal prematurely 
exitButton.addEventListener("click", () => {
    modal.style.display = "none";
})

// activates modal 
openModalButton.addEventListener("click", () => {
    form.reset(); // clears form inputs after previous exit
    modal.classList.add("open")
    modal.style.display = "flex"; // allows modal to be redisplayed after previous exit
});

closeModalButton.addEventListener("click", () => modal.classList.remove("open"));

let myLibrary = [];

// displays each book on page
function displayBooks(){
    display.innerHTML = "";
    // iterate through the array and access each book
    myLibrary.forEach((book) => {
        // create a new "card" for each book 
        const bookCard = document.createElement("div");
        
        // create card attributes (title, author, etc) and append them to the card
        const title = document.createElement("p"); 
        const author = document.createElement("p"); 
        const pages = document.createElement("p"); 
        const read = document.createElement("p"); 
        const deleteButton = document.createElement("button");
        

        deleteButton.type = "button";
        

        // deletes book from library and redisplays 
        deleteButton.addEventListener("click", () => {
            const book_idx = myLibrary.indexOf(book);
            if (book_idx > -1) {
                myLibrary.splice(book_idx, 1);
                displayBooks();
            } else {
                throw new Error(`${book} not found`);
            }
        });
        
       

        // populate the attributes
        title.innerText = "Title: " + book.title;
        author.innerText = "Author: " + book.author;
        pages.innerText = "Pages: " + book.pages;
        read.innerText = "Read Status: " + book.read;
        deleteButton.innerHTML ="<img src='./img/trash-can.png'></img>";
        deleteButton.title = "Delete Book";
   
        // append those card attributes to the card
        bookCard.append(title, author, pages, read, deleteButton);

        // randomize bookCard background colors if no background color is set
        if(!book.backgroundColor){
            book.backgroundColor = getRandomColor();
        }
        bookCard.style.backgroundColor = book.backgroundColor;
        // append bookCard to display
        display.appendChild(bookCard);
    });
}

// gets data from form to create new book 
function storeBookData (form) {

    const formData = new FormData(form);
    const formDataObj = Object.fromEntries(formData);

    // makes sure at least a title is passed in
    if (formDataObj.title){
        // adds default for other attributes 
        if (!formDataObj.author ) formDataObj.author = "Unknown";
        if (!formDataObj.pages) formDataObj.pages = "Unknown";
        // check if book already in library
        for (const book of myLibrary){
            if (book.title === formDataObj.title){
                // resets form on screen
                document.getElementById("form").reset();

                alert("This book already exists in your library. Try adding another.")
                return;
            }
        }
        // specifies read status on screen for user readability
        if (formDataObj.read === "on"){
            formDataObj.read = "Read";
        }else{
            formDataObj.read = "Not Read";
        }

        myLibrary.push(formDataObj);
        displayBooks();
        // resets form on screen
        document.getElementById("form").reset();
    }else{
        alert("Please add a title.");
        return;
    }
}

// generates random brutalist background color for each book
function getRandomColor() {
    const hue = Math.floor(Math.random() * 360); // Random hue between 0 and 360
    const saturation = Math.floor(Math.random() * 31) + 70; // Random saturation between 70% and 100%
    const lightness = Math.floor(Math.random() * 31) + 41; // Random lightness between 41% and 72%
    return `hsla(${hue}, ${saturation}%, ${lightness}%, 0.8)`; // Return HSLA color
}

// returns books for demonstration
function generateDummyBooks () {
    myLibrary = [
        {title: "Harry Potter", author: "JK Rolling", pages: "333", read: "Not Read"},
        {title: "The One Piece", author: "Unknown", pages: "34566", read: "Read"},
        {title: "Gatsby", author: "Unknown", pages: "66896", read: "Read"},
        {title: "Once", author: "JK Rolling", pages: "Unknown", read: "Not Read"},
        {title: "Authur", author: "Unknown", pages: "345", read: "Not Read"},
        {title: "Cat In The Hat", author: "Dr. Suess", pages: "586", read: "Read"},
        {title: "Harry Potter", author: "JK Rolling", pages: "333", read: "Not Read"},
        {title: "The One Piece", author: "Unknown", pages: "34566", read: "Read"},
        {title: "Gatsby", author: "Unknown", pages: "66896", read: "Read"},
        {title: "Once", author: "JK Rolling", pages: "Unknown", read: "Not Read"},
        {title: "Authur", author: "Unknown", pages: "345", read: "Not Read"},
        {title: "Cat In The Hat", author: "Dr. Suess", pages: "586", read: "Read"},
    ]
    displayBooks();
}


    
/*TODO:
create log in method/ add backend component
add a place to organize books based on alphabetical order, oldest, newest, read, not read
make it able to search for books in search bar and show only books that match the name or are similiar (implement fuzzy search)
make readme.md and make sure to mention all features
add toggle for read status*/ 