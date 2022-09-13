const OnePiece = new Book("One Piece", "Oda", "true");
let myLibrary = [OnePiece];
const grid = document.querySelector(".grid-container");
const form = document.querySelector(".form-container");
const submitButton = document.getElementById("submit-button");

// constructor
function Book(title, author, isRead){

    this.title = title;
    this.author = author;
    this.isRead = isRead;
}

function openForm(){
    form.style.display = "flex";
    form.classList.add("overlay-shadow");
}

function closeForm(){
    form.style.display = "none";
    form.classList.remove("overlay-shadow");
}

// get user input and create new book object to store in library
function addBookToLibrary(title, author, status){
    let newBook = new Book(title, author, status);
    myLibrary.append(newBook);
}

function displayBooks(){
    for(let i=0; i<myLibrary.length; i++){
        const bookCard = document.createElement("div");
        createCard(myLibrary[i], bookCard);
        bookCard.classList.add("book-card");
        grid.appendChild(bookCard);
    }
}

function createCard(book, bookCard){
    let title = book.title;
    const titleDiv = document.createElement("div");
    titleDiv.classList.add("title");
    titleDiv.innerHTML = title;
    bookCard.appendChild(titleDiv);
    
    let author = book.author;
    const authorDiv = document.createElement("div");
    authorDiv.classList.add("author");
    authorDiv.innerHTML = "by " + author;
    bookCard.appendChild(authorDiv);

    let isRead = book.isRead;
    const isReadDiv = document.createElement("div");
    isReadDiv.classList.add("isRead");
    isReadDiv.innerHTML = isRead;
    bookCard.appendChild(isReadDiv);

    const removeButton = document.createElement("button");
    removeButton.classList.add("remove-button");
    removeButton.innerHTML = "Delete";
    bookCard.appendChild(removeButton);

}
displayBooks();