const modal = document.querySelector('.modal');
const modalBtn = document.querySelector('.modal-btn');
const closeBtn = document.querySelector('.close-btn');


modalBtn.addEventListener('click', () => {
    modal.classList.add('open')
})

closeBtn.addEventListener('click', () => {
    modal.classList.remove('open')
})