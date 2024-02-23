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
       
        // populate the attributes
        title.innerText = "Title: " + book.title;
        author.innerText = "Author: " + book.author;
        pages.innerText = "Pages: " + book.pages;
        read.innerText = "Read Status: " + book.read;

        // append those card attributes to the card
        bookCard.append(title, author, pages, read);
        bookCard.style = "border: 2px solid black";
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
        if(!formDataObj.author || !formDataObj.pages){
            formDataObj.author = "Unknown";
            formDataObj.pages = "Unknown";
        }
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

//TODO: Add remove/delete button to html and add function