const bookList = document.querySelector('.book-list');
const formContainer = document.querySelector('.form-container');
const contact = document.querySelector('.contact');
const list = document.querySelector('#list');
const addNew = document.querySelector('#add-new');
const contactUs = document.querySelector('#contact');

list.addEventListener('click', () => {
    formContainer.classList.add('remove');
    contact.classList.add('remove');
    // document.getElementsByClassName("form-container").style.visibility = "hidden";
});



