import Modal from './modal.js';

const modal = Modal();

// This will work in all cases
const checkButtonsUI = document.querySelectorAll('.options a.check');

checkButtonsUI.forEach((checkButton) => {
   checkButton.addEventListener('click', (e) => {
      modal.open();
      console.log(e.target);
      console.log('OI');
      e.preventDefault();
   });
});

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