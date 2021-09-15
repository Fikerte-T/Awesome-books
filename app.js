const displayBooks = document.getElementById('displayBooks');
const title = document.getElementById('title');
const author = document.getElementById('author');
const addButton = document.getElementById('add');

class Book {
  constructor() {
    this.title = title;
    this.author = author;
    this.booksArr = [];
  }

  checkEvent() {
    addButton.addEventListener('click', (e) => {
      e.preventDefault();
      if (book.title.value !== '' && book.author.value !== '') {
        this.addBook(book);
      }
    });
  }
  checkStorage() {
    if (localStorage.getItem('mybooks')) {
      this.booksArr = JSON.parse(localStorage.getItem('mybooks'));
      this.display();
    }
  }

  addBook(newbook) {
    const bookObj = {
      title: newbook.title.value,
      author: newbook.author.value,
    };
    this.booksArr.push(bookObj);
    localStorage.setItem('mybooks', JSON.stringify(this.booksArr));
    this.display();
    document.querySelector('form').reset();
  }

  display() {
    displayBooks.innerHTML = '';
    this.booksArr.forEach((b) => {
      const bookContainer = document.createElement('div');
      let bookTitle = document.createElement('p');
      let bookAuthor = document.createElement('p');
      const remove = document.createElement('button');
      const lines = document.createElement('hr');
      remove.textContent = 'Remove';
      remove.onclick = (e) => {
        bookTitle = e.target.parentElement.childNodes[0].textContent;
        bookAuthor = e.target.parentElement.childNodes[1].textContent;
        this.booksArr = this.booksArr.filter(
          (book) => book.title !== bookTitle || book.author !== bookAuthor,
        );
        localStorage.setItem('mybooks', JSON.stringify(this.booksArr));
        this.display(this.booksArr);
      };
      bookTitle.innerText = b.title;
      bookAuthor.innerText = b.author;
      displayBooks.appendChild(bookContainer);
      bookContainer.appendChild(bookTitle);
      bookContainer.appendChild(bookAuthor);
      bookContainer.appendChild(remove);
      bookContainer.appendChild(lines);
    });
  }
}
const book = new Book();
book.checkStorage();
book.checkEvent();


