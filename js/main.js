MBP.scaleFix();
MBP.hideUrlBar();

$(function() {
  $(".logo, .header-logo").lettering();

  $('.post').fitVids();


  $(".navigation-toggle").hover(
    function () {
      $('.navigation').addClass('navigation-expanded');
      $('.navigation').removeClass('navigation-box-shadow');
      $(this).addClass('navigation-toggle-active');
      $('.navigation-contents').slideDown('fast', function() {

      });
      $('.page-overlay').fadeIn('fast');
    },
    function () {

    }
  );

  $(".navigation").hover(
    function () {

    },
    function () {
      $(this).removeClass('navigation-expanded');
      $('.navigation-contents').slideUp('fast', function() {
        $('.navigation-toggle').removeClass('navigation-toggle-active');
        $('.navigation').addClass('navigation-box-shadow');
        //$(".navigation-toggle").fadeIn('medium');
        $('.page-overlay').fadeOut('fast');
      });
    }
  );

});
