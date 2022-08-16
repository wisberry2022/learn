window.addEventListener('DOMContentLoaded', () => {
  const H1 = document.querySelector('h1');
  const TOGGLE = function () {
    this.classList.toggle('on');
  }
  H1.addEventListener('click', TOGGLE);

  // swiper 사용
  const swiper = new Swiper('.swiper2', {
    loop: true,

    pagination: {
      el: '.swiper-pagination',
      clickalbe: true,
    },

    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },

    on: {
      // init: function () {
      //   console.log('swiper initialized');
      // },

      slideChangeTransitionEnd: function () {
        console.log(this.slides.length, this.realIndex);
        document.querySelectorAll('.swiper-slide').forEach(elm => {
          elm.classList.remove('on');
        });
        document.querySelector('.swiper-slide-active').classList.add('on');
        document.querySelector('h1 strong').innerText = `${this.realIndex + 1} / ${this.slides.length - 2}`;
      },
    },

  });




});
