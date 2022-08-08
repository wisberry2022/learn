$(function () {

  function closeBanner() {
    // $('.TopBanner').toggleClass('on');
    $('.TopBanner').slideToggle('on');
    // document.querySelector('.TopBanner').classList.toggle('on');
  }

  $('.TopBanner i').on('click', closeBanner);

  $('.MainSlider').slick({
    arrows: false,
    dots: true,
    autoplay: true,
  });

  $('.ProductSlider').slick({
    arrows: false,
    slidesToShow: 5,
    responsive: [
      {
        breakpoint: 1230,
        settings: {
          slidesToShow: 1,
          dots: true
        }
      },
    ]
  });

  function toggleClass() {
    $('.pop li').toggleClass('on');
    $('.Footer .popup').toggleClass('on');
  }

  $('.pop li').on('click', toggleClass);

  $('.popup i').on('click', function () {
    $('.popup').removeClass('on');
  })

})
