$(function() {
  function showNav() {
    $('.page-overlay').fadeIn('fast');
    //$('.page-content, .footer, .bottom-border').hide();
    $('.navigation').addClass('navigation-expanded');
    $('.navigation').removeClass('navigation-box-shadow');
    $('.navigation-toggle').addClass('navigation-toggle-active');
    $('.navigation-toggle').removeClass('navigation-toggle-inactive');
    $('.navigation-contents').slideDown('fast');
  }

  function hideNav() {
    $('.navigation').removeClass('navigation-expanded');
    $('.navigation-contents').slideUp('fast', function() {
      $('.navigation-toggle').addClass('navigation-toggle-inactive');
      $('.navigation-toggle').removeClass('navigation-toggle-active');
      $('.navigation').addClass('navigation-box-shadow');
      $('.page-overlay').fadeOut('fast');
      //$('.page-content, .footer, .bottom-border').show();
    });
  }

  $('.page-overlay').height($(document).height());

  $('.navigation-toggle-inactive').click(function() {
    showNav();
  });
  $('.navigation-toggle-active').click(function() {
    hideNav();
  });

  $('.page-overlay').click(function() {
    hideNav();
  });
});
