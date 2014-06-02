$(document).ready(function(){
  function home_intro_height() {
    if (Modernizr.mq('(min-width: 641px)')) {
      $('.site-intro-content').height($(window).height());
    } else {
      $('.site-intro-content').css('height', 'auto');
    }
  }

  function home_init() {
    home_intro_height();
  }

  home_init();

  // Add resize listener
  $(window).resize(function() {
    home_init();
  });
});
