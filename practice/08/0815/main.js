window.onload = function() {
  const SLIDE_BTN = document.querySelector('.slide_btn');
  const CIRCLE = document.querySelector('.circle');
  SLIDE_BTN.addEventListener('click', function() {
    SLIDE_BTN.classList.toggle('on');
  })
}