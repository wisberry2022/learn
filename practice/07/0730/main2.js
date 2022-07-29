window.onload = function() {
  const LI = document.querySelectorAll('.dots li');
  const PLAYER = document.querySelectorAll('#slider .header_player');
  console.log(LI);

  LI.forEach(function(elm, index) {
    elm.addEventListener('click', function() {
      LI.forEach(function(el) {
        el.style.backgroundColor = '#000';
      } )
      elm.style.backgroundColor = '#fff';
      PLAYER[index].style.display = 'none';
      
    })

  });

}