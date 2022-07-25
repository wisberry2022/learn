$(function () {
  $('.main_slider').slick({
    arrows: false,
    autoplay: true,
    centerMode: true,
    centerPadding: '50px',
    dots: true,
  });

  $('.arrow_set i:nth-child(1)').on('click', function () {
    $('.main_slider').slick('slickPrev');
  })

  $('.arrow_set i:nth-child(2)').on('click', function () {
    $('.main_slider').slick('slickNext');
  })
})