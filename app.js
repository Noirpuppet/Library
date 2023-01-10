let myLibrary = [];

class Book {
    constructor (title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

let model = document.getElementById('model');
let openModel = document.querySelector('.open');
let closeModel = document.querySelector('.close');
let overlay = document.querySelector('.overlay')




openModel.addEventListener('click', () => {
    model.classList.add('active');
    overlay.classList.add('active');
    openModel.style.transform = "rotate(135deg)";
})

closeModel.addEventListener('click', () => {
    model.classList.remove('active');
    overlay.classList.remove('active');
    openModel.style.transform = "rotate(0deg)";
})