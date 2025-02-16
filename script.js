const library = [];
const dialog = document.querySelector("#dialog");
const openDialog = document.querySelector("#add_book");
const closeDialog = document.querySelector("#close");
const dialogForm = document.querySelector("#form");
const readStatus = document.querySelector("#status");

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

function book() {
    
}

function addBook() {

}