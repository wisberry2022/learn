$(function () {
  $('.visual_slider').slick({
    autoplay: true,
    dots: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
  });

  $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    dots: true,
    pauseOnHover: false,
  });

  $('.slider02').slick({
    autoplay: true,
    slidesToShow: 3,
  });
})