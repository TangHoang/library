let myLibrary = [];
let isRead;
const grid = document.querySelector(".grid-container");
const form = document.querySelector(".form-container");
const deleteButton = document.querySelector(".remove-button");
const submitButton = document.getElementById("submit-button");
const addButton = document.getElementById("add-button");
const checkbox = document.querySelector("#reading-status");



submitButton.onclick = () => { 
    isRead = "not finished";
    title = document.querySelector(".input-title").value;
    author = document.querySelector(".input-author").value;    
    addBookToLibrary(title, author, isRead);
    form.style.display = "none";
    form.classList.remove("overlay-shadow");
}

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
    const newBook = new Book(title, author, status);
    myLibrary.push(newBook);
    displayBooks(myLibrary.length-1);
}

function clearGrid(){
    grid.innerHTML = "";
}

function displayBooks(i){
    for(i; i<myLibrary.length; i++){
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
    const isReadDiv = document.createElement("button");
    isReadDiv.classList.add("status-button");
    isReadDiv.innerHTML = isRead;
    isReadDiv.onclick = () => {
        if(isReadDiv.innerHTML == "not finished"){
            isReadDiv.innerHTML = "finished";
            isReadDiv.classList.add("status-button-bg");
        }
        else if(isReadDiv.innerHTML == "finished"){
            isReadDiv.innerHTML = "not finished";
            isReadDiv.classList.remove("status-button-bg")
        }
    }
    bookCard.appendChild(isReadDiv);

    const removeButton = document.createElement("button");
    // delete card feature
    const currentBook = (element) => element == currentBook;
    removeButton.onclick = () => {
        removeButton.parentElement.remove();
        const index = myLibrary.findIndex(currentBook);
        myLibrary.splice(index, 1);
    }
    removeButton.classList.add("remove-button");
    removeButton.innerHTML = "Delete";
    bookCard.appendChild(removeButton);

}
displayBooks();