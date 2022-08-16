window.addEventListener('DOMContentLoaded', function () {

  const SCE_ELE = document.querySelectorAll('.screvent');


  window.addEventListener('scroll', function () {
    let sct = window.scrollY;
    sct > 0
      ? document.querySelector('#Header').classList.add('on')
      : document.querySelector('#Header').classList.remove('on');

  })

  window.addEventListener('scroll', function () {
    let sct = window.scrollY;
    SCE_ELE.forEach(elm => {
      if (sct > elm.offsetTop) {
        elm.classList.add('on');
      } else {
        elm.classList.remove('on');
      }
    })
  });


});