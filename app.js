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


function addBookToLibrary() {




  };