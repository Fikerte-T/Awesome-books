let books = [];
const displayBooks = document.getElementById('displayBooks');
const title = document.getElementById('title');
const author = document.getElementById('author');
const addButton = document.getElementById('add');

function BookList(title, author) {
  this.title = title;
  this.author = author;
}

function saveBooks() {
  localStorage.setItem('myBooks', JSON.stringify(books));
}
function display() {
  displayBooks.innerHTML = '';
  books.forEach((book) => {
    const bookContainer = document.createElement('div');
    const bookTitle = document.createElement('p');
    const bookAuthor = document.createElement('p');
    const remove = document.createElement('button');
    const lines = document.createElement('hr');
    remove.textContent = 'Remove';
    remove.onclick = (e) => {
      const bookTitle = e.target.parentElement.childNodes[0].textContent;
      const bookAuthor = e.target.parentElement.childNodes[1].textContent;
      books = books.filter((book) => book.title !== bookTitle || book.author !== bookAuthor);
      saveBooks();
      display();
    };
    bookTitle.innerText = book.title;
    bookAuthor.innerText = book.author;
    displayBooks.appendChild(bookContainer);
    bookContainer.appendChild(bookTitle);
    bookContainer.appendChild(bookAuthor);
    bookContainer.appendChild(remove);
    bookContainer.appendChild(lines);
  });
  document.querySelector('form').reset();
}
function addBook() {
  const book = new BookList(title.value, author.value);
  books.push(book);
  saveBooks();
  display();
}
addButton.onclick = addBook;

function checkStorage() {
  if (localStorage.getItem('books')) {
    books = JSON.parse(localStorage.getItem('books'));
  }
}
window.onload = checkStorage;
