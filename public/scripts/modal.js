// Factory
export default function Modal() {
   const checkButtonsUI = document.querySelectorAll('.options a.check');
   const deleteButtonsUI = document.querySelectorAll('.options a.delete');

   const modalOverlayUI = document.querySelector('.modal-overlay');
   
   const titleUI = document.querySelector('.modal h3');
   const textUI = document.querySelector('.modal p');

   const cancelButtonUI = document.getElementById('cancel');
   const OKButtonUI = document.querySelector('.modal input[type="submit"]');

   document.querySelector('.modal-overlay');
   function open() {
      modalOverlayUI.classList.add('on');
   }
   function close() {
      modalOverlayUI.classList.remove('on');
   }

   return { 
      checkButtonsUI,
      deleteButtonsUI,
      titleUI,
      textUI,
      cancelButtonUI,
      OKButtonUI,
      open, 
      close 
   }
}