// const { userInfo } = require("os");

const bookList = document.querySelector('.book-list');
const formContainer = document.querySelector('.form-container');
const contact = document.querySelector('.contact');
const list = document.querySelector('#list');
const addNew = document.querySelector('#add-new');
const contactUs = document.getElementById('contact');

list.addEventListener('click', function(){
    document.querySelector('.book-list').style.display = 'block';
    document.querySelector(".form-container").style.display = "none";
    document.querySelector(".contact").style.display = "none";
});

addNew.addEventListener('click', function(){
    document.querySelector(".book-list").style.display = "none";
    document.querySelector('.form-container').style.display = 'block';
    document.querySelector(".contact").style.display = "none";
});

contactUs.addEventListener('click', function(){
    document.querySelector(".form-container").style.display = "none";
    document.querySelector(".book-list").style.display = "none";
    document.querySelector('.contact').style.display = 'block';
});





