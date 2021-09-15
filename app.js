
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

  class Features {

    
    addBook(book){
      newBookArray.booksArr.push(book);
      localStorage.setItem('mybooks', JSON.stringify(newBookArray.booksArr));
      display(newBookArray.booksArr);
    }

    checkStorage() {
      if (localStorage.getItem('mybooks')) {
        let newArr = JSON.parse(localStorage.getItem('mybooks'));
        display(newArr);
      }
  }
    display(arr) {
      displayBooks.innerHTML = '';
      arr.forEach((b) => {
          const bookContainer = document.createElement('div');
          const bookTitle = document.createElement('p');
          const bookAuthor = document.createElement('p');
          const remove = document.createElement('button');
          const lines = document.createElement('hr');
          remove.textContent = 'Remove';
          remove.onclick = (e) => {
          const bookTitle = e.target.parentElement.childNodes[0].textContent;
          const bookAuthor = e.target.parentElement.childNodes[1].textContent;
          arr = arr.filter((book) => book.title !== bookTitle || book.author !== bookAuthor);
          // this.saveBooks();
          // display();
          };
          console.log(arr);
          // console.log(b.objtitle);
          // bookTitle.innerText = arr.;
          // bookAuthor.innerText = b.objauthor;
          displayBooks.appendChild(bookContainer);
          bookContainer.appendChild(bookTitle);
          bookContainer.appendChild(bookAuthor);
          bookContainer.appendChild(remove);
          bookContainer.appendChild(lines);
      });
}
}

let newBookArray = new BookArray();
const feature = new Features();
addButton.addEventListener('click', (e) => {
  e.preventDefault;
  const book = new Book(title.value, author.value);
  feature.addBook(book);
});

window.onload = feature.checkStorage;
