$(function () {
  $('.main_slider').slick({
    arrows: false,
    autoplay: true,
    dots: true,
  });

  $('.custom_slide_set i:first-child').on('click', function () {
    $('.main_slider').slick('slickPlay');
  });

  $('.custom_slide_set i:last-child').on('click', function () {
    $('.main_slider').slick('slickPause');
  })
})