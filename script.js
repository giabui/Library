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

//displays each book on page
function displayBooks(){
    const libraryContainer = document.getElementById("library-container");
    libraryContainer.innerHTML = ""; //clear existing content

    if(myLibrary.length === 0){ //check if library contains any books
        libraryContainer.innerHTML = "Add a new book to your library!";
        console.log("test");
        return;
     }
    //iterate through the myLibrary array
    myLibrary.forEach(book => {
        //create HTML book elements
        const bookContainer = document.createElement("div");
        const bookTitle = document.createElement("h2");
        const bookAuthor = document.createElement("p");
        const bookPageCount = document.createElement("p");
        const bookReadButton = document.createElement("button");
        const bookDeleteButton = document.createElement("button");

        //set class names for book elements
        bookContainer.classList.add("book");
        bookTitle.classList.add("title");
        bookAuthor.classList.add("author");
        bookPageCount.classList.add("page-count");
        bookReadButton.classList.add("read-button");
        bookDeleteButton.classList.add("delete-button");

        //set book elements' content
        bookTitle.innerHTML = `title:`;
        bookAuthor.innerHTML = `Author:`;
        bookPageCount.innerHTML = `Pages:`;
        bookReadButton.innerHTML = `Read:`;
        bookDeleteButton.innerHTML = `Delete`;


        //add read button function
        //add delete button function

        //append book elements to book container
        bookContainer.appendChild(bookTitle);                
        bookContainer.appendChild(bookAuthor);                
        bookContainer.appendChild(bookPageCount);                
        bookContainer.appendChild(bookReadButton);                
        bookContainer.appendChild(bookDeleteButton);                
        //append books to library container
        libraryContainer.appendChild(bookContainer);
    })


    
        
}