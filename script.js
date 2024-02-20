//array that stores all books
const myLibrary = [{title: "Harry Potter", author: "JK Rolling", numPages: 209, read: "no"}];

//creates new book
class Book {
    constructor(title, author, numPages, read) {
        this.title = title;
        this.author = author;
        this.numPages = numPages;
        this.read = () => {
            //button toggles this
        }
    }
}
//stores new book objects into an array
function addBookToLibrary(bookObj) {
    myLibrary.push(bookObj);
    return;
}
//displays each book on page
function displayBooks(myLibrary){
    const display = document.getElementById("library-container");
    //iterate through the array and access each book
    myLibrary.forEach((book) => {
        // create a new "card" for each book 
        const bookCard = document.createElement("div");
        // create card attributes (title, author, etc) and append them to the card
        const title = document.createElement("p"); 
        const author = document.createElement("p"); 
        const numPages = document.createElement("p"); 
        const read = document.createElement("p"); 
        // append those card attributes to the card
        bookCard.append(title, author, numPages, read);
        //populate the attributes
        title.innerText = book.title;
        author.innerText = book.author;
        numPages.innerText = book.numPages;
        read.innerText = book.read;
        //append bookCard to display
        display.appendChild(bookCard);
    });
}
displayBooks(myLibrary); // testing