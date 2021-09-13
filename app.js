const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');
const addButton = document.querySelector('.add-btn');
const list = document.querySelector('.list-container ul');
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

const books = {
    title: '',
    author: '',
    addBook(bookTitle, bookAuthor) {
        if(bookTitle.value != '' && bookAuthor.value != ''){
            let li1 = document.createElement('li');
            li1.innerText = bookTitle.value;
            list.appendChild(li1);
            this.title = bookTitle.value;
            let li2 = document.createElement('li');
            li2.innerText = bookAuthor.value;
            list.appendChild(li2);
            this.author = bookAuthor.value
            const btnRemove = document.createElement('button');
            btnRemove.innerText = 'Remove';
            list.appendChild(btnRemove);
            const horizontal = document.createElement('hr');
            list.appendChild(horizontal);
        }
    },
}
addButton.addEventListener('click', addBook());


