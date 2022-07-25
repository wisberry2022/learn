$(function () {
  // 220620 wang topBanner 
  $('.topBanner i').on('click', function () {
    $('.topBanner').slideUp();
  })
  // 220620 wang topBanner 

  $('.mainSlider').on('init afterChange', function (e, s, c) {
    var current = $('.slick-current');
    console.log(current);
    current.addClass('on').siblings().removeClass('on');
    $('.mainArrow i').removeClass('on');
    if (c === 1) {
      $('.mainArrow i').addClass('on');
    }
    $('.slideNum').text((c ? (c + 1) : 1) + " / " + s.slideCount);
  });

  // main - main_visual
  $('.mainSlider').slick({
    arrows: false,
    autoplay: true,
    dots: true,
    pauseOnHover: false,
    pauseOnFocus: false,
  });

  $('.mainArrow i:nth-child(1)').on('click', function () {
    $('.mainSlider').slick('slickPrev');
  })

  $('.mainArrow i:nth-child(2)').on('click', function () {
    $('.mainSlider').slick('slickNext');
  })
  // main - main_visual
  // ytplayer
  $('#utb').YTPlayer(
    {
      videoURL: 'https://youtu.be/fE1LQFdwMnw',
      containment: '.utb',
      autoPlay: true,
      mute: true,
      startAt: 0,
      opacity: 1,
      showControls: false,
      playOnlyIfVisible: true,
    });

  $('.utb .zoom').on('click', function (e) {
    e.preventDefault();
    $('#utb').YTPFullscreen();
  });

  $('.productSlider').slick({
    arrows: false,
    dots: true,
    slidesToShow: 5,
    centerMode: true,
  });

  $('.product .productArrows i:nth-child(1)').on(
    'click', function () {
      $('.productSlider').slick('slickPrev');
    }
  );

  $('.product .productArrows i:nth-child(2)').on(
    'click', function () {
      $('.productSlider').slick('slickNext');
    }
  );

  $('.tab_menu li').on('click', function (event) {
    event.preventDefault();
    // console.log($(this), $(this).index(), event.target, event.currentTarget);
    $('.tab_menu li').removeClass('on');
    var idx = $(this).index();
    $('.tab_content>div').removeClass('on');
    $('.tab_content>div').eq(idx).addClass('on');
    $(this).addClass('on');
  }
  );


  $('.tab_content .notice li').on('click', function (event) {
    event.preventDefault();
    var idx = $(this).index();
    $('.right_content>li').removeClass('on');
    $('.right_content>li').eq(idx).addClass('on');
    console.log(ux);
  }
  );

  $('.toTop').on('click', function () {
    $('html,body').animate({
      scrollTop: 0
    }, 200);
  });

  $(window).on('scroll', function () {
    var sct = $(window).scrollTop();
    if (sct > 500) {
      $('.toTop').fadeIn(300);
    } else {
      $('.toTop').fadeOut(600);
    }
  });

  $('#fl').on('change', function () {
    console.log($(this), $(this).val());
    var link = $(this).val();
    if (link) {
      window.open(link);
    }
  })
});