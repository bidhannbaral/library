const library = [];
const dialog = document.querySelector("#dialog");
const openDialog = document.querySelector("#add_book");
const closeDialog = document.querySelector("#close");
const dialogForm = document.querySelector("#form");
const addButton = document.querySelector("#add");
const bookList = document.querySelector(".bookList");
const bookStatus = "Unread";

bookList.addEventListener("click", (event) => {
    if (event.target && event.target.id == "status") {
        if (event.target.textContent == "Unread") {
            event.target.textContent = "Read";
            event.target.style.backgroundColor = "rgb(94, 240, 106)";
        } else {
            event.target.textContent = "Unread";
            event.target.style.backgroundColor = "rgb(207, 207, 207)";
        }
    }
});

bookList.addEventListener("click", (event) => {
    if (event.target && event.target.id == "delete") {
        removeBook(event.target);
    }
});

openDialog.addEventListener("click", () => {
    dialog.showModal();
});

closeDialog.addEventListener("click", () => {
    dialog.close();
    dialogForm.reset();
});

addButton.addEventListener("click", (event) => {
    event.preventDefault();
    const bookTitle = document.querySelector("#new-book-title").value;
    const bookAuthor = document.querySelector("#new-book-author").value;
    const bookPages = document.querySelector("#new-book-pages").value;
    const bookRating = document.querySelector("#new-book-rating").value;
    
    if (!bookTitle || !bookAuthor) {
        alert("Please input information for title and author");
        return;
    } else if(!bookPages || Number(bookPages) < 0 || Number(bookPages) > 10000) {
        alert("Please input a number between 0-10000 for pages");
        return;
    } else if(!bookRating || Number(bookRating) < 0 || Number(bookPages) > 5) {
        alert("Please input a number between 0-5 for rating");
        return;
    }

    addBookToLibrary(bookTitle, bookAuthor, bookPages, bookRating, bookStatus);
    dialog.close();
    dialogForm.reset();
});

function Book(title, author, pages, rating, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.rating = rating;
    this.status = status;
}

function addBookToLibrary(title, author, pages, rating, status) {
    const newBook = new Book(title, author, pages, rating, status);
    library.push(newBook);
    displayBook(newBook);
}

function displayBook(book) {
    const title = book.title;
    const author = book.author;
    const pages = book.pages;
    const rating = book.rating;
    const status = book.status;

    const list = document.createElement("div");
    list.className = "books";
    list.innerHTML = `<p id="title">${title}</p>
                      <p id="author">${author}</p>
                      <p id="pages">${pages}</p>
                      <button id="status">${status}</button>
                      <p id="rating">${rating}</p>
                      <button id="delete">X</button>`;

    bookList.append(list);
}

function removeBook(book) {
    const oldBook = book.parentElement;
    oldBook.remove();
}

const book1 = new Book('Harry Potter', 'J. K. Rowlings', 350, 1, "Unread");
const book2 = new Book('To Kill a Mockingbird', 'Harper Lee', 180, 2, "Unread");
const book3 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 120, 3, "Unread");
const book4 = new Book('Things Fall Apart', 'Chinua Achebe', 389, 4, "Unread");
displayBook(book1);
displayBook(book2);
displayBook(book3);
displayBook(book4);