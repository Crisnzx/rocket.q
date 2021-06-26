import Modal from './modal.js';

const modal = Modal();
// Open modal "Marcar como lida"
// This will work in all cases
modal.checkButtonsUI.forEach((checkButton) => {
   checkButton.addEventListener('click', (e) => {
      handleClick(e, true);
   });
});

// Open modal "Excluir"
modal.deleteButtonsUI.forEach((button) => {
   button.addEventListener('click', (e) => {
      handleClick(e, false);
   });
});  

// Close modal
modal.cancelButtonUI.addEventListener('click', modal.close);

function handleClick(e, read) {
   
   const text = read ? 'Marcar como lida' : 'Excluir';
   const slug = read ? 'check' : 'delete';
   const aClicked = 
   e.target.parentElement.classList.contains('check') || e.target.parentElement.classList.contains('delete') 
   ? e.target.parentElement 
   : e.target;
   const roomID = document.querySelector('#room-id').dataset.id;
   const questionID = aClicked.dataset.id;

   const formUI = document.querySelector('.modal form');
   formUI.setAttribute('action', `/question/${roomID}/${questionID}/${slug}`)

   if(read) {
      modal.OKButtonUI.classList.add('blue');

   } else {
      modal.OKButtonUI.classList.remove('blue');
      
   }
   modal.titleUI.textContent = `${text} essa pergunta`;
   modal.textUI.textContent = `Tem certeza que você deseja ${text.toLowerCase()} essa pergunta?`;
   modal.OKButtonUI.value = text;
   
   modal.open();
   e.preventDefault();
}

/* 
SAME THING BUT WITH EVENT DELEGATION
This will work in all cases: when I click on the p, a or img element

const allquestionsUI = document.querySelector('#questions');

allquestionsUI.addEventListener('click', (e) => {
   
   if(e.target.className === 'check' || e.target.parentElement.className === 'check') {
      modal.open();
      
   }
   e.preventDefault();
}
);

*/