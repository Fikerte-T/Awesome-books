const formContainer = document.querySelector('.form-container');
const contact = document.querySelector('.contact');
const list = document.querySelector('#list');
const addNew = document.querySelector('#add-new');
const contactUs = document.getElementById('contact');

formContainer.style.display = 'none';
contact.style.display = 'none';

list.addEventListener('click', () => {
  document.querySelector('.book-list').style.display = 'block';
  document.querySelector('.form-container').style.display = 'none';
  document.querySelector('.contact').style.display = 'none';
});

addNew.addEventListener('click', () => {
  document.querySelector('.book-list').style.display = 'none';
  document.querySelector('.form-container').style.display = 'block';
  document.querySelector('.contact').style.display = 'none';
});

contactUs.addEventListener('click', () => {
  document.querySelector('.form-container').style.display = 'none';
  document.querySelector('.book-list').style.display = 'none';
  document.querySelector('.contact').style.display = 'block';
});

const date = document.getElementById('date');
// eslint-disable-next-line no-undef
date.innerText = luxon.DateTime.now().toFormat('MMMM dd, yyyy, hh:mm:ss a');
