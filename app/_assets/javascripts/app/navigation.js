$(function() {
  function showNav() {
    $('.nav').slideDown('medium');
    $('.nav-toggle').addClass('nav-toggle--open');
    $('.nav-toggle-button').addClass('nav-toggle-button--active');
    $('.nav-toggle-button').removeClass('nav-toggle-button--inactive');
    $('.nav-toggle-button').hide();
    $('.nav-close').fadeIn('slow');
    $('.nav-toggle').fadeOut('medium');
  }

  function hideNav() {
    $('.nav-toggle').removeClass('nav-toggle--open');
    $('.nav').slideUp('medium', function() {
      $('.nav-toggle-button').addClass('nav-toggle-button--inactive');
      $('.nav-toggle-button').removeClass('nav-toggle-button--active');
      $('.nav-close').fadeOut('medium');
      $('.nav-toggle-button').show();
      $('.nav-toggle').fadeIn('medium');
    });
  }

  $('.nav-toggle').fadeIn('fast');

  $('.nav').height($(document).height());

  $('.nav-toggle-button').click(function() {
    showNav();
  });

  $('.nav-close').click(function() {
    hideNav();
  });

  var nav_links_height = $(window).height() / 6;
  $('.nav-links a').css('line-height', nav_links_height + 'px');

});

//var menu_target = $(".layout__up-to-two-columns").offset().top;
var menu_target = $(window).height() / 3;
var scroll_previous = 0;

$(document).scroll(function(){
  if (!$('.nav-toggle').hasClass('nav-toggle--open')) {
    if($(this).scrollTop() > menu_target) {
      $('.nav-toggle-background').fadeIn('fast');
      $('.nav-toggle').addClass('nav-toggle--background');
    } else {
      $('.nav-toggle-background').fadeOut('fast');
      $('.nav-toggle').removeClass('nav-toggle--background');
    }

    var scroll_current = $(this).scrollTop();
    if (scroll_current < scroll_previous){
      if ($('.nav-toggle').hasClass("nav-toggle--hidden")) {
        $('.nav-toggle').removeClass('nav-toggle--hidden');
        $('.nav-toggle').fadeIn('fast');
      }
    } else {
      if (scroll_current > 0) {
        $('.nav-toggle').addClass('nav-toggle--hidden');
        $('.nav-toggle').fadeOut('fast');
      }
    }
    scroll_previous = scroll_current;
  }
});
