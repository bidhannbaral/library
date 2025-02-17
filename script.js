const library = [];
const dialog = document.querySelector("#dialog");
const openDialog = document.querySelector("#add_book");
const closeDialog = document.querySelector("#close");
const dialogForm = document.querySelector("#form");
const readStatus = document.querySelector("#status");
const addButton = document.querySelector("#add");

readStatus.addEventListener("click", () => {
    if (readStatus.textContent == "Unread") {
        readStatus.textContent = "Read";
        readStatus.style.backgroundColor = "rgb(94, 240, 106)";
    } else {
        readStatus.textContent = "Unread";
        readStatus.style.backgroundColor = "rgb(207, 207, 207)";
    }
})

openDialog.addEventListener("click", () => {
    dialog.showModal();
});

closeDialog.addEventListener("click", () => {
    dialog.close();
    dialogForm.reset();
});

addButton.addEventListener("click", (e) => {
    e.preventDefault();
    const bookTitle = document.querySelector("#new-book-title").value;
    const bookAuthor = document.querySelector("#new-book-author").value;
    const bookPages = document.querySelector("#new-book-pages").value;
    const bookRating = document.querySelector("#new-book-rating").value;
    const bookStatus = "Unread";
    
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

    addBookToLibrary(bookTitle, bookAuthor, bookPages, bookRating);
    dialog.close();
    dialogForm.reset();
});

function Book(title, author, pages, rating) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.rating = rating;
}

function addBookToLibrary(title, author, pages, rating) {
    const newBook = new Book(title, author, pages, rating);
    library.push(newBook);
    console.log(library[0]);


}

