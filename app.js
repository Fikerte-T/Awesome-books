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
      const bookContainer = document.createElement('tr');
      const bookData = document.createElement('td');
      const buttonData = document.createElement('td');
      const remove = document.createElement('button');
      remove.classList.add('btn', 'btn-remove');
      remove.textContent = 'Remove';
      remove.style.background = 'pink'
      remove.style.paddingRight = '80px'
      remove.onclick = () => {
        const indexOfBook = this.booksArr.indexOf(b);
        this.booksArr = this.booksArr.filter(
          (book, index) => index !== indexOfBook,
        );
        localStorage.setItem('mybooks', JSON.stringify(this.booksArr));
        this.display(this.booksArr);
      };
      bookData.innerText = `"${b.title}" by ${b.author}`;
      displayBooks.appendChild(bookContainer);
      bookContainer.appendChild(bookData);
      bookContainer.appendChild(buttonData);
      buttonData.appendChild(remove);
    });
  }
}

const book = new Book();
book.checkStorage();

addButton.addEventListener('click', (e) => {
  e.preventDefault();
  if (book.title.value !== '' && book.author.value !== '') {
    book.addBook(book);
  }
});
