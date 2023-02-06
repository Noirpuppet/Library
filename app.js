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
    constructor(title, author, page, read) {
        this.title;
        this.author;
        this.page;
        this.read;
    }
}

// const addBookToLibrary = (e) => {
//     e.perventdefault();
//     let book = new Book(title, author, page, read);
//     library.push(book);
//     document.querySelector('form').reset();
//   }

document.querySelector('.addBook')
    .addEventListener('click', addBookToLibrary);

function addBookToLibrary() {

    const addCard = document.getElementById('cardBox');
    const newCard = document.createElement('div');
    newCard.classList.add('card');
    newCard.innerHTML = `<div>title</div>
                        <div>author</div>
                        <div>page</div>
                        <div>read</div>`;

    const newEdit = document.createElement('div');
    newEdit.innerText = 'Edit';
    newEdit.classList.add('edit');
    const newRemove = document.createElement('div');
    newRemove.innerText = 'Remove';
    newRemove.classList.add('remove');

    addCard.appendChild(newCard);
    newCard.appendChild(newEdit);
    newCard.appendChild(newRemove);
};

