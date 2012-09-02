MBP.scaleFix();
MBP.hideUrlBar();

mapbox.auto('footer-map', 'kollegorna.map-rbr6h31m');

$(function() {
  $(".logo, .header-logo").lettering();

  $('.map-link').click(function() {
    $('.footer-map').slideToggle('fast', function(){
      $('html, body').animate({scrollTop: $(document).height()}, 'slow');
    });
    return false;
  });
});
