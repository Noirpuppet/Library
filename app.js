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
    constructor (title, author, page) {
        this.title = title;
        this.author = author;
        this.page = page;
    }
}

const addBookToLibrary = (e) => {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const page = document.getElementById('page').value;
    document.querySelector('form').reset();

    const books = new Book(title, author, page);
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
                            <div>By ${book.author}</div>
                            <div>Page ${book.page}</div>`;

        const newRemove = document.createElement('div');
        newRemove.innerText = 'Remove';
        newRemove.classList.add('remove');
        
        addCard.appendChild(newCard);
        newCard.appendChild(newRemove);
        
        //remove book from array
        newRemove.addEventListener('click', () => {
            library.splice(library.indexOf(book), 1);
        });
    });
};
//remove book from UI
const deleteBook = (el) => {
    if(el.classList.contains('remove')) {
        el.parentElement.remove();
    };
};

document.querySelector('#cardBox').addEventListener('click', (e) => {
    deleteBook(e.target);
});
