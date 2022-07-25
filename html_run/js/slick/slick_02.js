$(function () {

  $('.main_slider').on('init afterChange', function (e, s, c) {
    console.log(e, s, c);
    $('.slide01 .box .num').text("0" + (c ? c + 1 : 1) + '/' + "0" + s.slideCount);
    $('.slide01 .content>li').eq(c).addClass('on').siblings().removeClass('on');
  });

  $('.main_slider').slick({
    arrows: false,
    dots: true,
    centerMode: true,
    centerPadding: '150px',
  });

  $('.slide_arrows i:nth-child(1)').on('click', function () {
    $('.main_slider').slick('slickPrev');
  });

  $('.slide_arrows i:nth-child(2)').on('click', function () {
    $('.main_slider').slick('slickNext');
  });

  $('.slide02 .left_slider').slick({
    arrows: false,
    fade: true,
  });

  $('.slide02 .right_slider').slick({
    arrows: false,
    slidesToShow: 4,
    asNavFor: '.left_slider',
  });

  $('.slide02 .right i:nth-child(1)').on('click', function () {
    $('.right_slider').slick('slickPrev');
  });

  $('.slide02 .right i:nth-child(2)').on('click', function () {
    $('.right_slider').slick('slickNext');
  });
})