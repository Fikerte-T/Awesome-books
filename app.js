let books = [];
const displayBooks = document.getElementById('displayBooks');
const title = document.getElementById('title');
const author = document.getElementById('author');
const addButton = document.getElementById('add');

    function FormBook (title, author){
        this.title = title;
        this.author = author;
    }

function saveBooks(){
    const myBooks = JSON.stringify(books);
    localStorage.setItem('books', myBooks)
}
function display(){
    displayBooks.innerHTML = ' ';
    books.forEach((book) => {
        const bookContainer = document.createElement('div');
        const bookTitle = document.createElement('p');
        const bookAuthor = document.createElement('p');
        const remove = document.createElement('button');
        const lines = document.createElement('hr')
        remove.textContent = 'Remove';
        remove.onclick = (e) => {
            const bookTitle = e.target.parentElement.childNodes[0].textContent;
            const bookAuthor = e.target.parentElement.childNodes[1].textContent;
            books = books.filter((book) => book.title !== bookTitle || book.author !== bookAuthor);
            saveBooks();
            display();
        }
        bookTitle.innerText = book.title;
        bookAuthor.innerText = book.author;
        displayBooks.appendChild(bookContainer);
        bookContainer.appendChild(bookTitle);
        bookContainer.appendChild(bookAuthor);
        bookContainer.appendChild(remove);
        bookContainer.appendChild(lines);
    });
}
    function addBook(){
        const title = document.getElementById('title');
        const author = document.getElementById('author');
        const book = new FormBook(title.value, author.value);
        books.push(book);
        saveBooks();
        display();
    }
    addButton.onclick = addBook;

    function checkStorage() {
        if (localStorage.getItem('books')) {
          books = JSON.parse(localStorage.getItem('books'));
          display();
        }
      }
  window.onload = checkStorage;
  display();















// const books = [
//     {
//         title:  'Lorum ipsum',
//         author: 'Testeroo Testyy'
//     },
//     {
//         title: 'Second book',
//         author: 'Testeroo Testyy'
//     }
// ]

// function addBook(){
//     title.value= '';
//     author.value= '';
//     addBook(bookTitle, bookAuthor) {
//         if(bookTitle.value != '' && bookAuthor.value != ''){
//             let li1 = document.createElement('li');
//             li1.innerText = bookTitle.value;
//             list.appendChild(li1);
//             this.title = bookTitle.value;
//             let li2 = document.createElement('li');
//             li2.innerText = bookAuthor.value;
//             list.appendChild(li2);
//             this.author = bookAuthor.value
//             const btnRemove = document.createElement('button');
//             btnRemove.innerText = 'Remove';
//             list.appendChild(btnRemove);
//             const horizontal = document.createElement('hr');
//             list.appendChild(horizontal);
//         }
//     },
// }
// addButton.addEventListener('click', addBook());


