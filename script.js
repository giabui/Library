//array that stores all books
const myLibrary = [];

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