$(function() {
  //$('.site-intro').height($(window).height());
  $('.site-intro').css('min-height', $(window).height() + 'px');
});

//var menu_target = $(".layout__up-to-two-columns").offset().top;
var menu_target = $(window).height() / 3;
var scroll_previous = 0;

$(document).scroll(function(){
  if($(this).scrollTop() > menu_target) {
    $('.header-background').fadeIn('fast');
    $('.header').addClass('header--background');
  } else {
    $('.header-background').fadeOut('fast');
    $('.header').removeClass('header--background');
  }

  var scroll_current = $(this).scrollTop();
  if (scroll_current < scroll_previous){
    if ($('.header').hasClass("header--hidden")) {
      $('.header').removeClass('header--hidden');
      $('.header').fadeIn('fast');
    }
  } else {
    if (scroll_current > 0) {
      $('.header').addClass('header--hidden');
      $('.header').fadeOut('fast');
    }
  }
  scroll_previous = scroll_current;
});
