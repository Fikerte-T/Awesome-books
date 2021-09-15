const displayBooks = document.getElementById('displayBooks');
const title = document.getElementById('title');
const author = document.getElementById('author');
const addButton = document.getElementById('add');
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}
class BookArray {
  booksArr = [];
}
const newBookArray = new BookArray();
class Features {
  addBook(book) {
    newBookArray.booksArr.push(book);
    localStorage.setItem('mybooks', JSON.stringify(newBookArray.booksArr));
    return newBookArray.booksArr;
  }

  checkStorage() {
    if (localStorage.getItem('mybooks')) {
      const newArr = JSON.parse(localStorage.getItem('mybooks'));
      return newArr;
    }
  }

  display(arr) {
    displayBooks.innerHTML = '';
    arr.forEach((b) => {
      const bookContainer = document.createElement('div');
      let bookTitle = document.createElement('p');
      let bookAuthor = document.createElement('p');
      const remove = document.createElement('button');
      const lines = document.createElement('hr');
      remove.textContent = 'Remove';
      remove.onclick = (e) => {
        bookTitle = e.target.parentElement.childNodes[0].textContent;
        bookAuthor = e.target.parentElement.childNodes[1].textContent;
        arr = arr.filter((book) => book.title !== bookTitle || book.author !== bookAuthor);
        localStorage.setItem('mybooks', JSON.stringify(arr));
        feature.display(arr);
      };
      console.log(b.title);
      console.log(b.author);
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

const feature = new Features();
addButton.addEventListener('click', (e) => {
  e.preventDefault;
  const book = new Book(title.value, author.value);
  feature.display(feature.addBook(book));
  document.querySelector('form').reset();
});
window.onload = feature.display(feature.checkStorage());
