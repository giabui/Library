const display = document.getElementById("library-container");//library books stored here
const openModalButton = document.getElementById("openModal");
const closeModalButton = document.getElementById("closeModal");
const modal = document.getElementById("modal");

// activates and deactivates modal 
openModalButton.addEventListener("click", () => modal.classList.add("open"));
closeModalButton.addEventListener("click", () => modal.classList.remove("open"));

const myLibrary = [];

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
    // add counter to keep track of book indexes 
    // makes sure at least a title is passed in
    if (formDataObj.title){
        // adds default for other attributes 
        if (!formDataObj.author) formDataObj.author = "Unknown";
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
        // generate unique book id
        formDataObj.bookId = Date.now();
        console.log(formDataObj);
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
