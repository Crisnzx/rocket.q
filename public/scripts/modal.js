// Factory
export default function Modal() {
   function open() {
      document.querySelector('.modal-overlay').classList.add('on');
   }
   function close() {
      document.querySelector('.modal-overlay').classList.remove('off');
   }

   return { open, close }
}