$(function () {
  $('.MainSlider').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    pauseOnHover: false,
    pauseOnFocus: false,
  });

  $('.productSlider').slick({
    arrows: false,
    autoplay: true,
    pauseOnHover: false,
    pauseOnFocus: false,
  });

  $('.product_arrows i:nth-child(1)').on('click', function () {
    $('.productSlider').slick('slickPrev');
  });

  $('.product_arrows i:nth-child(2)').on('click', function () {
    $('.productSlider').slick('slickNext');
  });
})