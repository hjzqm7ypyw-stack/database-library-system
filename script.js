let books = [];

function addBook() {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;

    if (title && author) {
        books.push({ title, author });
        displayBooks();
    }
}

function displayBooks() {
    let list = document.getElementById("bookList");
    list.innerHTML = "";

    books.forEach(book => {
        let li = document.createElement("li");
        li.textContent = book.title + " - " + book.author;
        list.appendChild(li);
    });
}
