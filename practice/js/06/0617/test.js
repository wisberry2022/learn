$(function() {
  $('section .container .menu>li').on('click', function() {
    var idx = $(this).index()
    $('.location li').eq(idx).toggleClass('on').siblings().removeClass('on');
    $('.desc li').eq(idx).toggleClass('on').siblings().removeClass('on');
  })
})