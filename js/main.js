MBP.scaleFix();
MBP.hideUrlBar();

$(function() {
  $(".logo, .header-logo").lettering();

  $('.post').fitVids();

  function showNav() {
    $('.navigation').addClass('navigation-expanded');
    $('.navigation').removeClass('navigation-box-shadow');
    $('.navigation-toggle').addClass('navigation-toggle-active');
    $('.navigation-toggle').removeClass('navigation-toggle-inactive');
    $('.navigation-contents').slideDown('fast');
    $('.page-overlay').fadeIn('fast');
  }

  function hideNav() {
    $('.navigation').removeClass('navigation-expanded');
    $('.navigation-contents').slideUp('fast', function() {
      $('.navigation-toggle').addClass('navigation-toggle-inactive');
      $('.navigation-toggle').removeClass('navigation-toggle-active');
      $('.navigation').addClass('navigation-box-shadow');
      $('.page-overlay').fadeOut('fast');
    });
  }

  if ($('html').hasClass('no-touch')) {
    // No touch device
    $('.navigation-toggle').hover(
      function () {
        showNav();
      },
      function () {

      }
    );

    $(".navigation").hover(
      function () {

      },
      function () {
        hideNav();
      }
    );
  } else {
    // Touch device
    $('.navigation-toggle-inactive').click(function() {
      showNav();
    });
    $('.navigation-toggle-active').click(function() {
      hideNav();
    });
  }

  $('.page-overlay').click(function() {
    hideNav();
  });
});
