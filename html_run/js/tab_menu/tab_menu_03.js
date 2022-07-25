$(function () {
  // a 태그는 li태그로 감싸져 있어서 항상 nth-child(1) 이기 때문에 a를 선택해도 인덱스를 잡을 수 없다.
  $('.tab_menu>li>a').on('click', function (e) {
    var idx = $(this).parent().index();
    // this == e.currentTarget
    $('.tab_content>li').removeClass('on');
    $('.tab_content>li').eq(idx).addClass('on');
    $('.tab_menu>li').removeClass('on');
    $(this).parent().addClass('on');
  });
})