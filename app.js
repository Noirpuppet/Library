const year = new Date().getFullYear();
document.getElementById('year').innerText = year;

const addBtn = document.createElement('button');
addBtn.classList.add('addBtn');
addBtn.textContent = '+'
document.body.appendChild(addBtn);

addBtn.addEventListener('click', (e) => {
    addBtn.style.transform = 'rotate(135deg)';
    document.querySelector('.overlay')
        .classList.add('overlay-active');
    document.getElementById('form') 
        .style.transform = 'translate(-50%, -50%) scale(1)';
    
});
document.querySelector('.closeBtn')
    .addEventListener('click', (e) => {
        addBtn.style.transform = 'rotate(0deg)';
    document.querySelector('.overlay')
        .classList.remove('overlay-active');
    document.getElementById('form') 
        .style.transform = 'translate(-50%, -50%) scale(0)';
    });

let library = [];

class Book {
    constructor (title, author, page, read) {
        this.title = title;
        this.author = author;
        this.page = page;
        this.read = read;
    }
}

const addBookToLibrary = (e) => {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const page = document.getElementById('page').value;
    const read = document.getElementById('read').checked;
    document.querySelector('form').reset();

    const books = new Book(title, author, page, read);
    library.push(books);
    displayBook();
    console.log(library)
}

document.querySelector('form').addEventListener('submit', addBookToLibrary);

const displayBook = () => {
    const bookContainer = document.getElementById('cardBox');

    while (bookContainer.firstChild) {
        bookContainer.removeChild(bookContainer.firstChild);
      };

    library.forEach(book => {
        const addCard = document.getElementById('cardBox');
        const newCard = document.createElement('div');
        newCard.classList.add('card');
        newCard.innerHTML = `<div>${book.title}</div>
                            <div>${book.author}</div>
                            <div>${book.page} pages</div>
                            <div>${book.read}</div>`;

        const newEdit = document.createElement('div');
        newEdit.innerText = 'Edit';
        newEdit.classList.add('edit');
        const newRemove = document.createElement('div');
        newRemove.innerText = 'Remove';
        newRemove.classList.add('remove');

        addCard.appendChild(newCard);
        newCard.appendChild(newEdit);
        newCard.appendChild(newRemove);
    });
};