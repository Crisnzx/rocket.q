const questionsUI = document.querySelector('#questions');
const modalUI = document.querySelector('.modal-overlay');


questionsUI.addEventListener('click', (e) => {
   console.log(e.target);
   // modalUI.classList.add('on');
   // console.log('oi');
   e.preventDefault();
});